WSDL Workshop 
Semantic web application in HTML5 for the discovery, construction and analysis of workflows

------------------------
Abstract
------------------------

WSDL-Workshop is a HTML5 web application for the discovery and exploration of web services and for analyzing the compatibility between web services. This is the result of a mathematical model developed from WSDL1.1. The program provides a graphical user interface and let the user build a workflow composed of services described with WSDL1.1 and tells if:

An output is compatible with an input.
It is correct to link an output with an input.
It is correct to link a given operation after another.
If many operations correctly linked together still make sense as a group.

In order to do that the WSDLs must have semantic annotations so the computer can recognize what is the purpose of certain data or operation. WSDL-Workshop uses the EDAM Ontology as a reference for semantic concepts.

In the discovery aspect; for a given set of WSDLs you can find services by filtering by operation name, input or output names, or semantic annotations. For a given operation output it can also filter by WSDL which have inputs which are correct to link with that output. For a given operation it can also filter by operations which are correct to link after.

------------------------
Files
------------------------

/Doc Folder with documentation. Please start with the Master Thesis PDF document.

/Res Here you can find the images for the icons, the CBU logo and the ontologies files.

/WSDLs Here you can find all the default WSDL files. Note the file directory.xml; using this you don't need to give additional directory listing to your server.

/XSD These are all the schema references that you can find inside any WSDL file.

file.txt This is an empty file. The server save your workflow state in here and send it to the user when the user want to save his work. JavaScript doesn't allow writing or reading files directly for security reasons, so this adjustment is require.

help.html Contain a plain HTML version of this document. When the user clicks help, he is automatically redirected to the WSDL-Workshop section.

index.html Is the main page of the program.

license.txt Description of the license, CC-SA-BY-NC 3.0

README.txt A text file that contain this very description.

style.css Is the CSS file for index.html

WSDLWorkshop.js Contain the JavaSctipt code.

