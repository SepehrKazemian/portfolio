import os
import re

def parse_projects_to_jsx(input_path):
    """Parses the projects.txt file and generates JSX code."""
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"Error: Input file not found at {input_path}")
        return ""

    jsx_output = ""
    current_project_jsx = ""
    in_list = False

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Start of a new project
        if line.startswith('<h1>'):
            # Finish previous project if exists
            if current_project_jsx:
                if in_list:
                    current_project_jsx += "      </ul>\n"
                    in_list = False
                current_project_jsx += "    </div>\n" # Close project div
                jsx_output += current_project_jsx

            # Start new project div
            title = line.replace('<h1>', '').replace('</h1>', '').strip()
            # Removed JSX comments from f-string
            current_project_jsx = f"""

    <div className="group relative border-b border-gray-200 pb-6 last:border-b-0">
      <h2 className="text-4xl font-semibold text-gray-100 mb-2 group-hover:text-indigo-000 transition-colors duration-150">
      {title}
      </h2>
"""
        # Subtitle (e.g., technologies) - Render h2 as smaller text
        elif line.startswith('<h2>'):
            subtitle = line.replace('<h2>', '').replace('</h2>', '').strip()
            # Render h2 as smaller text
            current_project_jsx += f"""      <p className="text-base text-gray-100 mb-2">{subtitle}</p>\n""" # Increased size slightly

        # Sub-subtitle (e.g., section header) - Render h3 as medium heading
        elif line.startswith('<h3>'):
             if in_list:
                 current_project_jsx += "      </ul>\n"
                 in_list = False
             sub_subtitle = line.replace('<h3>', '').replace('</h3>', '').strip()
             # Render h3 as medium heading
             current_project_jsx += f"""      <h3 className="text-2xl font-medium text-gray-100 mt-4 mb-1">{sub_subtitle}</h3>\n""" # Increased size

        # Bullet points
        elif line.startswith('- '):
            if not in_list:
                current_project_jsx += "      <ul className=\"list-disc list-inside text-xl text-gray-200 space-y-1 mb-3\">\n"
                in_list = True
            list_item = line[2:].strip()
            current_project_jsx += f"        <li>{list_item}</li>\n"

        # Normal text (description)
        else:
            if in_list:
                current_project_jsx += "      </ul>\n"
                in_list = False
            # Process line for potential <a> tags before adding as paragraph
            processed_line = re.sub(
                r'<a\s+href="([^"]+)"\s*>(.*?)</a>',
                r'<a href="\1" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">\2</a>',
                line
            )
            # Add paragraph for description text, using dangerouslySetInnerHTML for the processed HTML/JSX
            # NOTE: Using dangerouslySetInnerHTML requires trusting the input in projects.txt
            # A more robust solution might involve a proper HTML/Markdown parser if complex tags are needed.
            current_project_jsx += f"""      <p className="text-xl text-gray-200 leading-relaxed mb-3" dangerouslySetInnerHTML={{{{__html: `{processed_line}`}}}}></p>\n"""

    # Add the last project
    if current_project_jsx:
        if in_list:
            current_project_jsx += "      </ul>\n"
        current_project_jsx += "    </div>\n" # Close last project div
        jsx_output += current_project_jsx

    return jsx_output

def generate_jsx_file(template_path, output_path, generated_content):
    """Reads a template, replaces a placeholder, and writes the output file."""
    try:
        with open(template_path, 'r', encoding='utf-8') as f:
            template_content = f.read()
    except FileNotFoundError:
        print(f"Error: Template file not found at {template_path}")
        # Provide a basic fallback template if missing
        template_content = """import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="w-full max-w-none px-8 text-justify">
        <h2 className="text-4xl font-semibold text-gray-000 mb-8 text-center md:text-left">
          Selected Projects
        </h2>
        <div className="space-y-10">
          {/* GENERATED_PROJECTS_CONTENT */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
"""
        print("Using basic fallback template.")


    final_content = template_content.replace("{/* GENERATED_PROJECTS_CONTENT */}", generated_content)

    try:
        # Ensure output directory exists
        output_dir = os.path.dirname(output_path)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            print(f"Created directory: {output_dir}")

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        print(f"Successfully generated: {output_path}")
    except IOError as e:
        print(f"Error writing output file {output_path}: {e}")


if __name__ == "__main__":
    script_dir = os.path.dirname(__file__)
    base_dir = os.path.abspath(os.path.join(script_dir, '..')) # Project root

    input_file = os.path.join(base_dir, 'data', 'projects.txt')
    template_file = os.path.join(base_dir, 'src', 'components', 'Projects.template.jsx')
    output_file = os.path.join(base_dir, 'src', 'components', 'Projects.jsx')

    print(f"Reading projects from: {input_file}")
    print(f"Using template: {template_file}")

    generated_jsx = parse_projects_to_jsx(input_file)

    if generated_jsx:
        generate_jsx_file(template_file, output_file, generated_jsx)
    else:
        print("No JSX content generated.")
