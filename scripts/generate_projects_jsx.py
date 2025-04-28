import os
import re
import json

def parse_projects_to_data(input_path):
    """Parses the projects.txt file and generates structured data."""
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"Error: Input file not found at {input_path}")
        return []

    projects_data = []
    current_project = None
    current_list_items = []

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Start of a new project
        if line.startswith('<h1>'):
            # Finalize previous project's list if exists
            if current_project and current_list_items:
                 current_project['content'].append({'type': 'list', 'items': current_list_items})
                 current_list_items = []

            # Start new project object
            title_content = line.replace('<h1>', '').replace('</h1>', '').strip()
            title_text = title_content
            title_url = None # Use None if no URL

            if '|' in title_content:
                parts = title_content.split('|', 1)
                title_text = parts[0].strip()
                title_url = parts[1].strip()

            current_project = {
                'id': len(projects_data) + 1, # Simple ID generation
                'title': title_text,
                'url': title_url,
                'content': []
            }
            projects_data.append(current_project)

        elif current_project: # Only process content if we are inside a project
            # Finalize list if a non-list item follows
            if not line.startswith('- ') and current_list_items:
                current_project['content'].append({'type': 'list', 'items': current_list_items})
                current_list_items = []

            # Subtitle (h2)
            if line.startswith('<h2>'):
                subtitle = line.replace('<h2>', '').replace('</h2>', '').strip()
                current_project['content'].append({'type': 'h2', 'text': subtitle})

            # Sub-subtitle (h3)
            elif line.startswith('<h3>'):
                sub_subtitle = line.replace('<h3>', '').replace('</h3>', '').strip()
                current_project['content'].append({'type': 'h3', 'text': sub_subtitle})

            # Bullet points
            elif line.startswith('- '):
                list_item = line[2:].strip()
                current_list_items.append(list_item)

            # Normal text (paragraph) - Store raw text, handle links in React
            else:
                 # Process line for potential <a> tags and store as structured data
                content_parts = []
                last_end = 0
                for match in re.finditer(r'<a\s+href="([^"]+)"\s*>(.*?)</a>', line):
                    # Add text before the link
                    if match.start() > last_end:
                        content_parts.append({'type': 'text', 'value': line[last_end:match.start()]})
                    # Add the link data
                    content_parts.append({'type': 'link', 'href': match.group(1), 'text': match.group(2)})
                    last_end = match.end()
                # Add text after the last link
                if last_end < len(line):
                    content_parts.append({'type': 'text', 'value': line[last_end:]})

                # If no links were found, add the whole line as text
                if not content_parts:
                     content_parts.append({'type': 'text', 'value': line})

                current_project['content'].append({'type': 'paragraph', 'parts': content_parts})


    # Finalize the list for the very last project
    if current_project and current_list_items:
         current_project['content'].append({'type': 'list', 'items': current_list_items})

    return projects_data

def write_json_file(output_path, data):
    """Writes the data structure to a JSON file."""
    try:
        # Ensure output directory exists
        output_dir = os.path.dirname(output_path)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            print(f"Created directory: {output_dir}")

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2) # Use indent for readability
        print(f"Successfully generated JSON data: {output_path}")
    except IOError as e:
        print(f"Error writing JSON file {output_path}: {e}")
    except TypeError as e:
        print(f"Error serializing data to JSON: {e}")


if __name__ == "__main__":
    script_dir = os.path.dirname(__file__)
    base_dir = os.path.abspath(os.path.join(script_dir, '..')) # Project root

    input_file = os.path.join(base_dir, 'data', 'projects.txt')
    # Output JSON file instead of JSX
    output_file = os.path.join(base_dir, 'src', 'projectsData.json')

    print(f"Reading projects from: {input_file}")

    projects_data = parse_projects_to_data(input_file)

    if projects_data:
        write_json_file(output_file, projects_data)
    else:
        print("No project data generated.")
