/**Things to do
  
 
Fix Logo

 
 Aminoacid periodic table link

**/

//Code from
/**
 * Some inspiration came from here:
 * 
 * http://simonsarris.com/ - Handles for resizing pieces. 
 * 
 * http://colorschemedesigner.com/ - Color wheel colors
 **/






//___________________________________________
//          CONSTANTS DECLARATION
//___________________________________________

//The list of every ontology in EDAM.
var ONTOLOGIES = ["topic","operation","format","data"];
//I'm skipping the indentifier ontology which is not use in this program.

//WSIO ontologies. (deprecated)
//
//var ONTOLOGIES = ["topic","operation","format","data","identifier","transfer","comprenssion"];

//A file where all the WSLD are reunited
//I'm using this because for some reason the directory listing
//in GlassFish 3.1.2 is not working even when enable :-S
var WSLD_DIRECTORY = "/WSDLs/directory.xml";

//A OBO file with the EDAM ontology
var ONTOLOGY_FILE = "/Res/ontologies/EDAM.obo";

//Here is a list of Elemental Datatypes. This appears in green
//in the graphical representations. They are special because
//they are not complicated datatypes, just strings, integers and such.

//At the end; every part of the wsdl must be a green label.
var ELEMENTAL_DATATYPES = ["duration","dateTime","time","date","gYearMonth","gYear",
                           "gMonthDay", "gDay","gMonth","boolean","base64Binary","hexBinary",
                           "float","double","anyURI","QName","NOTATION","string","decimal",
                           "normalizedString","integer","token","nonPositiveInteger","long",
                           "nonNegativeInteger","language","Name","NMTOKEN","negativeInteger",
                           "int","unsignedLong","positiveInteger","NCName","NMTOKENS","short",
                           "unsignedInt","byte","unsignedShort","unsignedByte"]; //Missing ID Row, testing

//Frames per second for the animations (not in use yet; but makes things very pretty and spectacular)
var FPS = 60;

//Graphical constants

//LINKS
var LINK_FULL = 'rgba(0,204,0,0.5)';
var LINK_GOOD    = 'rgba(18,64,171,0.5)';
var LINK_UNKONWN = 'rgba(255,255,0,0.5)';
var LINK_NON = 'rgba(255,0,0,0.5)';

//CONECTION BOXES
//---Colors for each element type            //Bases in Color Space:
var SIMPLE_FILL_OFF   = "rgba(0,133,0,.9)";  //00CC00
var SIMPLE_FILL_ON    = "rgb(57,230,57)";
var COMPLEX_FILL_OFF  = "rgba(133,0,75,.9)"; //CD0074
var COMPLEX_FILL_ON   = "rgb(230,57,155)";
var INLINE_FILL_OFF  = "rgba(0,133,0,.9)";  //1240AB
var INLINE_FILL_ON   = "rgb(57,230,57)";
//var INLINE_FILL_OFF  = "rgba(6,38,111,.9)";  //1240AB
//var INLINE_FILL_ON   = "rgb(70,113,213)";
var CHOICE_FILL_ON    = "rgb(255,64,64)";    //ff0000
var CHOICE_FILL_OFF   = "rgba(166,0,0,.9)";
var DEFAULT_FILL      = "black";
var NAME_FILL         = "rgb(33,33,33)";
var NAME_FILL_ON      = "rgb(133,133,133)";
//---Colors for the link compatibility light
var COMP_FULL    = 'rgba(0,204,0,1)';
var COMP_GOOD    = 'rgba(18,64,171,1)';
var COMP_UNKONWN = 'rgba(255,255,0,1)';
var COMP_NON     = 'rgba(255,0,0,1)';

//---Which percentage occupy each of the subBoxes respect its father.
var SUBBOX_PERCENTAGE_WIDE = 0.85;

//SEMANTIC BOXES
//---Colors for different ontologies
var SEMANTIC_ONTOLOGY_COLOR = "rgb(33,33,33)";
//---Colors for the title
var SEMANTIC_TITLE_COLOR = "rgb(33,33,33)";
//---Colors for the IDs
var SEMANTIC_ID_COLOR = "rgb(33,33,33)";
//---Color for the fonts
var SEMANTIC_FONT_COLOR = "white";

//PIECE
//--Frame
var FULL_CANVAS_COLOR = "#009999";
var SWAP_LAYER_BOX_COLOR = "#00CC00";
var TOGGLER_SEMACTIC_VIEWER_BOX_COLOR_ON = "#269926";
var TOGGLER_SEMACTIC_VIEWER_BOX_COLOR_OFF = "#FF4040";
var FRAME_PERCENTAGE_HEIGHT = 5;
var FRAME_MAX_ABSOLUTE_HEIGHT = 30;
var FRAME_BACKGROUND_COLOR = '#323232';
var FRAME_BORDER = 1;
var FRAME_BORDER_COLOR = "grey";
var FRAME_ERASER_COLOR = "red";
var FRAME_COLLAPSER_COLOR = "yellow";
//--Title
var TITLE_PERCENTAGE_HEIGHT = 25;
var TITLE_MAX_ABSOLUTE_HEIGHT = 150;
var TITLE_BACKGROUND_COLOR = "orange";
var TITLE_BORDER_WIDTH = 3;
var TITLE_BORDER_COLOR = "black";
var TITLE_FONT = "DejaVu Sans Mono";
var TITLE_FONT_COLOR = "black";
var TITLE_FONT_PROPORTION = 2;
//--Viewer
var VIEWER_BACKGROUND = 'rgb(33,33,33)';
var VIEWER_BORDER = 1;
var VIEWER_BORDER_COLOR = 'rgb(10,10,10)';
var VIEWER_FONT_COLOR = 'white';
//--Body
var CONECTIONBOX_PERCENTAGE_WIDTH = 3/7;
var CONECTIONBOX_PERCENTAGE_SEPARATION = 0.05;
var CONECTIONBOX_MAX_ABSOLUTE_HEIGHT = 100;
//--Footer
var FOOTER_PERCENTAGE_HEIGHT = 12;
var FOOTER_MAX_ABSOLUTE_HEIGHT = 75;
var WSDL_ORIGIN_REMINDER = "gray";
var WSDL_ORIGIN_REMINDER_FONT_COLOR = 'white';
//--Workflow View Mode
var WORKFLOW_BACKGROUND = 'rgb(0,133,0)';
//--Mass selected color
var PIECE_MASS_SELECTION_COLOR = 'rgba(18,64,171,0.2)';


//WORKSHOP
var SELECTION_COLOR = '#DD0000';
var MASS_SELECTION_COLOR = 'rgba(18,64,171,0.5)';
var SELECTION_WIDTH = 2;  

var REDRAW_INTERVAL = 30; //This will be related to FPS in the future
			  //For now there is only 1 Frame Per Change
			  //updated every REDRAW_INTERVAL ms 

//--Handlers
var HANDLER_FILL_COLOR = '#55EE22';
var HANDLER_BORDER_COLOR = '#111111';
var HANDLER_SIZE = 20;
var HANDLER_BORDER = 3;
//--Cutters
var CUTTER_COLOR = '#FF0000';
var CUTTER_BORDER =	10;


//___________________________________________
//          GLOBAL VARIABLES
//___________________________________________
//
//Here is a list with all the WSDLs we had parse.
var WSDL_list = [];

//This receive the whole text from the OBO file
var Ontology_Text = "";

//Pointer to the Workshop object
var The_Workshop = null;

//Pointer to the Ontology object
var The_Ontology = null;

//Keep track of which filter mode are we using right now
//The options are:
//0.- list
//1.- tree 
var filter_mode = 0;

//Keep track off every operation name available
//You can also get them by getting name of getting operations of a WSDL
var operation_names = [];

//The next three variables are bidimensional matrices. The element i-th correspond
//with the operation which have name operation_names[i]. The element i-th will be a list
//with strings with every input, output, or semantic concepts which that operation holds.
var input_names = [];
var output_names = [];
var semantic_concepts = [];
//These 4 are just a cache for optimization


//Keep track of every name that the search function returned
var search_result = [];
var search_result_operation = [];
var search_result_inputs = [];
var search_result_outputs = [];
var search_result_semantics = [];

//Filter options (state):
var filter_option =    [false,false,false,false];
var input_compatible = [false,false,false,false];
var semantic_option =  [false,false,false,false];


//___________________________________________
//          GENERAL AUXILIAR FUNCTIONS
//___________________________________________

/**
 * Goes through an array and return elements which has no repetitions
 * 
 * @param {Array} array of elements
 * 
 * @return {Array} array of elements
 */
function uniqueElements(array) {
    
    var unique = {};
    var finalArray = [];
    
    for(var i = 0, l= array.length; i<l; ++i){
        
        if(unique.hasOwnProperty(array[i])===false) {
            finalArray.push(array[i]);
            unique[array[i]] = 1;
        }
    }

    return finalArray;
}

//___________________________________________
//          WSDL PARSER STUFF
//___________________________________________

//Differences between a TYPE and an ELEMENT:
//Please refers to the writen documentation for a full verbose explanation:
//A TYPE is a type of variable. For example a string is a Type which is a list
//of characters, a person is a Type which have name, age and gender for example.
//A Type can be simple, like the string, or can be complex, like the person
//An ELEMENT is the variable itself. For example I can have a variable named
//Employer which is type Person

//------------CLASES--------------------------
{

//This class is a Pair of Ontology and ID
//The ontology is given in a string and can be "operation","data",etc...
//The id is a html link to the Internet that looks like "http://.../data_034"
/**
 * Constructor of the class Pair
 * 
 * @param {string} ontology ; name of the subontology
 * @param {string} id ; HTTP link with the documentation
 * 
 * @returns {Pair}
 */
function Pair(ontology,id){
    
  //Attributes
  this.ontology = ontology;
  this.id = id;
    
  //Methods
  this.getOntology = getOntology;
  this.setOntology = setOntology;
  this.setID = setID;
  this.getID = getID;
  this.toString = toString;
  this.getOntologyName = getOntologyName;
  this.getNumber = getNumber;
  
  /**
   * This function retrieve the number from the link
   * 
   * @returns {int} Integer with the ID number
   */
  function getNumber(){

      return parseInt(id.split(ontology+"_")[1]);
      
  }
  
  /**
   * This function returns the name of the ontoly related with the ID
   * It could be
   * -EDAM
   * -WSIO
   * -UNKNOWN
   * 
   * @returns {string}
   */
  function getOntologyName(){
      
      var name = "unknown";
      
      if(id.toLowerCase().indexOf("edam")>=0){
          name = "edam";
      }
      else{
        if(id.toLowerCase().indexOf("wsio")>=0){    
            name = "wsio";
        }
      }
      
      return name;
  }

  function setOntology(ontology){
    this.ontology = ontology;
  }
      
  function getOntology(){
    return this.ontology;
  }
      
      
  function setID(id){
    this.id = id;
  }
      
  function getID(){
      return this.id;
  }
  
  function toString(){
  
    return ("["  + (this.ontology) + ":" + (this.id) + "]") ;
  
  
  }
    
}

//Semantic class
//Keep a list of pairs of Ontology and ID.
function Semantic(pairsListe){
 
  this.pairsList = pairsListe;
  
  //Methods
  this.addPair = addPair;
  this.getPair = getPair;
  this.toString = toString;
  this.size = size;
  this.getSemanticTable = getSemanticTable;
  this.getClass = getClass;
  
  function getClass(){
      
      return "semanticObject";
  }
  
  function getSemanticTable(){
      
      //console.log("Semantic Object");
      //console.log("Pairs: "+this.pairsList.length);
      
      var semantic_table = [];
      
      for(var i=0;i<this.pairsList.length;i++){
            
        var myPair = this.pairsList[i];
        var link = myPair.getID();
        //Check if we have that semantic already
        var found = -1;
        for(var j=0; j<semantic_table.length; j++){
                
            if(semantic_table[j][0]===link){
                found = j;
                j = semantic_table.length + 10; //stop looking
            }
                
        }
         
        //If we do increment
        if(found>=0){
            semantic_table[found][1] += 1;
        }
        //If we don't add it
        else{
            semantic_table.push([link,1]);        
        }
            
            
    }
    //console.log("tarari " + semantic_table);
    //console.log("returning " + semantic_table);
    
    return semantic_table;
      
  }
  
  function size(){
      
      return this.pairsList.length;
      
  }
  
  function addPair(pairSemantic){
      
      (this.pairsList).push(pairSemantic);
      
  }
  
  function getPair(i){
      
      return this.pairsList[i];
      
  }
  
  function toString(){
      
      var myString = "[";
      
      for (var i=0; i<this.pairsList.length; i++) {
          
          myString += this.pairsList[i].toString() ;
          
      }
  
      myString += "]";

      return myString;
      
  }
     
}

//This is the Enumeration Class
//A SimpleType might have a series of restrictions which are these enumerations
function Enumeration(value, semantic){
  
  this.value = value;
  this.semantic = semantic;
  this.class = "enumeration";
  
  this.toString = toString;
  this.getSemanticTable = getSemanticTable;
  this.getClass = getClass;
  
  function getClass(){
      return this.class;
  }
  
  
  function toString(){
      
      var final = "Value: "+this.value+" |  Semantics: "+this.semantic.toString();
      
      return final;
      
  }
  
  function getSemanticTable(){
      
      //console.log("O");
      
      return this.semantic.getSemanticTable();
      
  }
  
  
}


//Here are the simpleType and complexType. Both have in common name, semantics,
// toString() and getName() methods.

//A simple type is very similar to a simpleElement but this is a TYPE __not__ an Element
function SimpleType(name,type,semantic, enumerationList, fixed){
    
    this.name = name;
    this.type = type;
    this.semantic = semantic;
    this.enumerationList = enumerationList;
    this.fixed = fixed;
    this.class = "simpleType";
    this.schema = "";
    
    this.getSemantic = getSemantic;
    this.getName = getName;
    this.toString = toString;
    this.getEnumeration = getEnumeration;
    this.getFixed = getFixed;
    this.getType = getType;
    this.getSemanticTable = getSemanticTable;
    this.getClass = getClass;
    this.getSemanticDB = getSemanticDB;
    
    
    function getSemanticDB(){
        
        //Get my semantics
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
        
        //Get the semantics of my enumertions
        for(var i=0;i<this.enumerationList.length; i++){
            
            
            var myEnumerationTable = this.enumerationList[i].getSemanticTable();
            for(var j=0; j<myEnumerationTable.length; j++){    
                
                myEnumerationTable[j].push("enumeration");
                myEnumerationTable[j].push(this.name);
            }
            
            myTable = myTable.concat(myEnumerationTable);
            
        }
        
        return myTable;
        
    }
    
    function getSemanticTable(){
        
        //console.log("A");
        //console.log(this.name);
        
        
        //Get my semantics
        var myTable = this.semantic.getSemanticTable();
        
        //Get the semantics of my enumertions
        for(var i=0;i<enumerationList.length; i++){
            
            
            var myEnumerationTable = this.enumerationList[i].getSemanticTable();
            myTable = mergeSemanticTable(myTable,myEnumerationTable);
            
        }
        
        
        
        return myTable;
        
    }
    
    function getClass(){
        return this.class;
    }
    
    function getFixed(){
        
        return this.fixed;
        
    }
    
    function getEnumeration(){
        
        return this.enumerationList;
        
    }
    
    function getSemantic(){
        return this.semantic;
    }

    function getName(){
        return this.name;
    }
    
    function getType(){
        
        return this.type;
        
    }

    function toString(){
        
        var final = "(SimTy) Name: "+this.name + " Type: "+this.type + "\n";
        final +=   "Semantics: " + this.semantic.toString() + " Schema: " + this.schema + "\n";
        
        if(this.enumerationList.length>0){
            
            final += "     Enumerations: \n";
            for(var i=0; i<enumerationList.length; i++){
                
                final+= "     {"+enumerationList[i].toString()+"} \n";
                
            }
            
        }
    
        if(this.fixed.length>0){
            
            final += "Fixed to: "+fixed;
            
        }
    
        return final;
        
    }
    
}

//This is an auxiliar class to keep a list of elements
function Sequence(list_of_elements){
    
    this.list_of_elements = list_of_elements;
    
    this.getList = getList;
    this.toString = toString;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    
    
    function getSemanticDB(){
        
        var myTable = [];
        
        for(var i=0;i<this.list_of_elements.length;i++){
            
            var tableDB = this.list_of_elements[i].getSemanticDB();
            myTable.concat(tableDB);
            
        }
        
        return myTable;
        
    }
    
    function getSemanticTable(){
        
        //console.log("B");
        
        var myTable = [];
        for(var i=0; i<this.list_of_elements.length; i++){
            
            var myElementTable = this.list_of_elements[i].getSemanticTable();
            myTable = mergeSemanticTable(myTable,myElementTable);
            
            
        }
    
        return myTable;
        
    }
    
    function toString(){
        
        var final = "";
        
        for(var i=0 ; i<this.list_of_elements.length; i++){
            
            final += list_of_elements[i].toString() + "\n";
            
            
        }
    
        return final;
        
        
    }
    
    function getList(){
        
        return this.list_of_elements;
        
    }

    
    
}

//A complex type have a name, semantics, a list of sequences and a list of attributes
//(attributes are not recomended according to w3 specification (not sure why they allow it then!))
function ComplexType(name, semantic, listOfSequences, listOfAttributes){
    
    this.name = name;
    this.semantic = semantic;
    this.listOfSequences = listOfSequences;
    this.listOfAttributes = listOfAttributes;
    this.class = "complexType";
    this.schema = "";
    
    this.getClass = getClass;
    this.getName = getName;
    this.toString = toString;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.getInsideElements = getInsideElements;
    
    //Returns the elements of all the sequences and all the attributes in a list
    function getInsideElements(){
        
        var myInsideElements = [];
        
        
        //For each sequence
        for(var i=0; i<this.listOfSequences.length; i++){
        
            //Get its elements
            var sequenceElementsDump = listOfSequences[i].list_of_elements;
            //Put them in the list we are going to return
            for(var j=0; j<sequenceElementsDump.length; j++){
                
                myInsideElements.push(sequenceElementsDump[j]);
                
            }
            
        }
    
        //For each attribute
        for(var i=0; i<this.listOfAttributes.length; i++){
            
            //Put them in the list we are going to return
            myInsideElements.push(this.listOfAttributes[i]);
            
        }
        
        return myInsideElements;
        
    }
    
    function getSemanticDB(){
        
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
        
        for(var i=0; i<listOfSequences.length; i++){
            
            var mySequenceTable = listOfSequences[i].getSemanticDB();
            myTable = myTable.concat(mySequenceTable);
            
        }
        
        for(var i=0; i<listOfAttributes.length; i++){
            
            var myAttributeTable = listOfAttributes[i].getSemanticDB();
            myTable = myTable.concat(myAttributeTable);
        }
        
        return myTable;
        
    }
    
    function getSemanticTable(){
        
        //console.log("C");
        //console.log(this.name);
        
        //console.log("I am going to ask for the semantics of:");
        //console.log(this.semantic.toString());
        
        var myTable = this.semantic.getSemanticTable();
        
        for(var i=0; i<listOfSequences.length; i++){
            
            //console.log("Asking for the sequences "+ listOfSequences[i]);
            var mySequenceTable = listOfSequences[i].getSemanticTable();
            myTable = mergeSemanticTable(myTable,mySequenceTable);
            
        }
        
        for(var i=0; i<listOfAttributes.length; i++){
            
            //console.log("Asking for the attributes "+ listOfAttributes[i]);
            var myAttributeTable = listOfAttributes[i].getSemanticTable();
            myTable = mergeSemanticTable(myTable,myAttributeTable);
        }
        
        //console.log("returning C " + myTable);
        
        return myTable;
        
    }
    
    function getClass(){
        return this.class;
    }
    
    function toString(){
        
        var final = "Name: "+this.name + " Type: "+this.type + "\n";
        final +=   "Semantics: " + this.semantic.toString() + " Schema: " + this.schema + "\n";
        
        if(this.listOfSequences.length>0){
            final += "List of Sequences \n";
            for(var i=0; i<this.listOfSequences.length; i++){
                final += "Sequence "+i+"\n";    
                final += this.listOfSequences[i].toString();
                
            }
            
        }
    
        if(this.listOfAttributes.length>0){
            final += "List of Attributes: "+listOfAttributes.length+" \n";
            for(var i=0; i<this.listOfAttributes.length; i++){ 
                final += this.listOfAttributes[i].toString() + "\n";
                
            }
            
        }
        
        return final;
            
    }
    
    function getName(){
        return this.name;
        
    }

}


/*
//Inheritance is VERY complicated in JavaScript and the code become quite difficult to read.
//The following classes should be inherit from a superclass called Element
//-inLineElement
//-simpleElement
//-complexElement
//-choiceElement
//What I'm doing is to "flat" the method and attributes of the superclass to each
//of these subclasses. The common stuff is:
//-Name
//-Semantic
//-Class
//-toString()
//-getSemantic()
//-getName()
//-getClass()
*/

//An Inline Element has a name, type and semanctics.
//The type can be a complex type, simple type or elemental datatype.
//If you want to know more about the type you will need to ask the WSDL.
function inLineElement(name,type,semantic, fixed){

    this.name = name;
    this.type = type; //The type is going to be String unless otherwise specify.
    this.semantic = semantic;
    this.fixed = fixed;
    this.class = "inLineElement";
    
    this.getType = getType;
    this.toString = toString;
    this.getSemantic = getSemantic;
    this.getName = getName;
    this.getSemanticTable = getSemanticTable;
    this.getClass = getClass;
    this.getSemanticDB = getSemanticDB;
    this.isElemental = isElemental;
    
    function getSemanticDB(){
        
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
    
        return myTable;
    
    }    
    
    function getSemanticTable(){
        
        //console.log("F");
        
        return this.semantic.getSemanticTable();
        
    }
    
    function getClass(){
        return this.class;
    }
    
    function getSemantic(){
        return this.semantic;
    }

    function getName(){
        return this.name;
    }
    
    function getType(){
        
        return this.type;
        
    }

    function toString(){
        
        var final = "(IL) Name: "+this.name + " Type: " + this.type + " Semantics: " + this.semantic.toString();
        
        if(this.fixed.length>0){
            
            final += "Fixed to: "+fixed;
            
        }
        
        return final;
        
    }
  
    //This function tells if an Inline element has an elemental datatype
    function isElemental(){

        var result = false;
        var type = this.type;
        
        //The type can be in two formats
        //(1) schema_tag : datatype , ie. xs:string . Usually like this
        //(2) datatype, ie. string. Very very weird.
        
        //If we are in case (1)
        if(this.type.indexOf(":") !== -1){
        
            type = this.type.split(":")[1];
            
        }
        //If we are in case (2) everything is setup already


        //Now check if the type is an elemental datatype
        for(var i=0; i<ELEMENTAL_DATATYPES.length && result===false; i++){
            
            if(type===ELEMENTAL_DATATYPES[i]){
                result = true;
            }
            
            
        }

        //Return whatever result you got
        return result;
    }
}

//A simple element is an element who has a simpleType declaration inside
//The simpleType CANNOT have a name according to w3 definition.
//It can however have some restrictions and patters; I'm going to forget about some of that stuff for now.
function simpleElement(name,semantic, simpleType){
    
    this.name = name;
    this.semantic = semantic;
    this.simpleType = simpleType;
    this.class = "simpleElement";
    
    this.getSemantic = getSemantic;
    this.getName = getName;
    this.toString = toString;
    this.getType = getType;
    this.getSemanticTable = getSemanticTable;
    this.getClass = getClass;
    this.getSemanticDB = getSemanticDB;
    
    
    function getSemanticDB(){
        
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
    
        //console.log(this.name);
        var simpleTable = this.simpleType.getSemanticDB();
        myTable.concat(simpleTable);
        
        return myTable;
    
     }
    
    function getSemanticTable(){
        
        //console.log("G");
        
        var myTable = this.semantic.getSemanticTable();
        var mySimpleTable = []; 
        
        if(this.simpleType !== "undefined"){
            mySimpleTable = this.simpleType.getSemanticTable();
        }
        
        myTable = mergeSemanticTable(myTable,mySimpleTable);
        
        return myTable;
        
    }
    
    function getClass(){
        return this.class;
    }
    
    function getSemantic(){
        return this.semantic;
    }

    function getName(){
        return this.name;
    }
    
    function getType(){
        
        return this.simpleType.getType();
        
    }

    function toString(){
        
        var final = "(S) Name: "+this.getName() + " Type: " + this.getType() + " Semantics: " + this.semantic.toString();
        
        var enumeration = this.simpleType.getEnumeration();
        
        if(enumeration.length>0){
            
            final += "\n";
            final += "     Enumerations: \n";
            for(var i=0; i<enumeration.length; i++){
                
                final+= "     {"+enumeration[i].toString()+"}\n";
                
            }

            
        }
    
        var fixed = this.simpleType.getFixed();
    
        if(fixed.length>0){
            
            final += "Fixed to: "+fixed;
            
        }
    
        return final;
        
    }
    
}

//A complex Element has a list of complexTypes.
function complexElement(name, semantic, listOfComplexTypes){
    
    this.name = name;
    this.semantic = semantic;
    this.listOfComplexTypes = listOfComplexTypes;
    this.class = "complexElement";
    
    this.getName = getName;
    this.toString = toString;
    this.getClass = getClass;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.getType = getType;
    this.extractElements = extractElements;
    

    function getType(){
        
        return "complex";
        
    }
    
    function getSemanticDB(){
        
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
        
        for(var i=0; i<listOfComplexTypes.length; i++){
            
            var complexTable = listOfComplexTypes[i].getSemanticDB();
            myTable = myTable.concat(complexTable);
            
        }
    
        return myTable;
    
    }    
    
    function getSemanticTable(){
        
        //console.log("H");
        //console.log(this.name);
        //console.log(this.toString());
        
        //console.log("Asking for semantics of " + this.semantic.toString());
        
        var myTable = this.semantic.getSemanticTable();
        
        //console.log("I have this many ComplexTypes: " + listOfComplexTypes.length);
        
        if(listOfComplexTypes.length===1){
            
            //console.log(listOfComplexTypes[0].name);
        }
        
        for(var i=0; i<listOfComplexTypes.length; i++){
        
            //console.log("Asking for the semantics of " + listOfComplexTypes[i]);
            var myComplexTable = listOfComplexTypes[i].getSemanticTable();            
            myTable = mergeSemanticTable(myTable,myComplexTable);
                
        }
    
        //console.log("returning H " + myTable);
    
        return myTable;
        
    }
    
    function getClass(){
        return this.class;
    }
    
    function toString(){
        
        var final = "Name: "+this.name + " Semantics: " + this.semantic.toString() + "\n";
        
        final += "List of ComplexTypes: \n";
        
        for(var i=0; i<listOfComplexTypes.length; i++){
            
            final += listOfComplexTypes[i].toString();
            
        }
    
        return final;
        
    }

    function getName(){
        return this.name;
        
    }

    //An operation can have serveral parts in the messages which allow the
    //operation to have several elements as input and not just one complex
    //element with all the real inputs aggregated to it.
    //However not everybody makes use of this and people tends to use the bad
    //way of collapsing everything inside only one part of the Message.
    //

    //This function tells if this complex element is actually one of those
    //first level; badly defined; all input collapsed elementes.
    function isCollector(){
        /*
         * I think you can't do this here and must be the operation the one
         * that detects if this is a bad complex element.
         * @returns {undefined}
         */
        
    }


   //This function will extract that information from this complex element
   //And return the real inputs (or outputs) that belongs to this collapsed
   //element that should be defined like this in the first place.
   function extractElements(){
       
       var myInsideElements = [];
       
       
       //For every complex type       
       for(var i=0; i<listOfComplexTypes.length; i++){
            
           
           //Gets the elements from inside
           var myComplexTypeElements = listOfComplexTypes[i].getInsideElements();
           
           //Add it to the return list
           for(var j=0; j<myComplexTypeElements.length; j++){
               
               myInsideElements.push(myComplexTypeElements[j]);
           }
           
       }
       
       
       return myInsideElements;
      
   }

}

//A choice Elements is an element from where you must choice one element from its list.
function choiceElement(name, semantic, listOfElements){
    
    this.name = name;
    this.semantic = semantic;
    this.listOfElements = listOfElements;
    this.class = "choiceElement";
    
    this.getName = getName;
    this.toString = toString;
    this.getClass = getClass;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.getType = getType;
    
    
    function getType(){
        
        return "variable";
        
    }
    
    
    function getSemanticDB(){
        
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }        
        
        for(var i=0; i<listOfElements.length; i++){
     
            var myChoiceTable = listOfElements[i].getSemanticDB();            
            myTable = myTable.concat(myChoiceTable);
                
        }
        return myTable;
    }
    
    function getSemanticTable(){
        
        //console.log("J");
        
        var myTable = this.semantic.getSemanticTable();
        
        for(var i=0; i<listOfElements.length; i++){
     
            var myChoiceTable = listOfElements[i].getSemanticTable();            
            myTable = mergeSemanticTable(myTable,myChoiceTable);
                
        }
        return myTable;
    }
    
    function getClass(){
        return this.class;
    }
    
    
    function toString(){
        
        var final = "(CHO) Name: "+this.name + " Semantics: " + this.semantic.toString() + "\n";
        
        final += "        Choice one of these: \n";
        
        for(var i=0; i<listOfElements.length; i++){
            
            final += "        "+listOfElements[i].toString()+"\n";
            
        }
    
        return final;
        
        
    }
    
    function getName(){
        return this.name;
        
    }
    
    
}

//Part class
//This is part of the Message class, which is composed by a list of Parts
function Part(name,element){
    this.name = name;
    this.element = element;
    
    this.toString = toString;
    this.getElement = getElement;
    this.getName = getName;
    
    function getName(){
        return this.name;
    }

    function getElement(){
        return this.element;
    }
    
    function toString(){

        return ("[Name: "+this.name + "  Element: "+this.element.getName() + "]");
        
    }
    
}

//Message class
//Keep the message name, an a list of parts with the name and element.
//Apparently there are no semantics in the messages either
function Message(name,partList){
    this.name = name;
    this.partList = partList;
    this.class = "message";
    
    this.getPartList = getPartList;
    this.getName = getName;
    this.toString = toString;
    this.getElementsList = getElementsList;
    this.getClass = getClass;
  
    function getClass(){
      return this.class;
    }
    
    function toString(){
        var final = "";
        
        final+= "Message name: "+this.name+"\n";
        
        final += "Parts: \n";
        
        for(var i=0; i<partList.length; i++){
            final += partList[i].toString();
        }
        
        return final;
        
    }
    
    function getPartList(){
        return this.partList;
    }

    function getName(){
        return this.name;
    }

    function getElementsList(){
        
        var elementList = [];
        
        for(var i=0;i<partList.length;i++){
            elementList.push(partList[i].getElement());
        }
        
        return elementList;
    }
    
    
}

//Operation class
//Keep a name of the operation, the semantics and a reference to the messages
//which ara inputs and outputs.
function Operation(name,inputMessage,outputMessage, semantic){
    this.name = name;
    this.inputMessage = inputMessage;
    this.outputMessage = outputMessage;
    this.semantic = semantic;
    this.class = "operation";
    
    this.toString = toString;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.getName = getName;
    this.getInputElements = getInputElements;
    this.getOutputElements = getOutputElements;
    this.getSemanticIDs = getSemanticIDs;
    this.getInputsNames = getInputsNames;
    this.getOutputsNames = getOutputsNames;
    this.getAllSemantics = getAllSemantics;

    
    
    
    //Return a list of names with the title of every annonation in the operation, inputs and outputs without repetetions
    function getAllSemantics(){
        
        //Prepare the list with the NAMES
        var nameList = [];
        //Prepare the list where the semantics references are going to be (id, ontology)
        var semanticList = [];
        
        //Create the auxiliar piece
        var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", "Auxiliar");        
        auxiliarPiece.initFromOperationWSDL(this);

        //Get the semantics from the operation
        var operationSemantics = auxiliarPiece.getOntologies(); //[op, in, out]!
        operationSemantics = operationSemantics[0].concat(operationSemantics[1].concat(operationSemantics[2]));
        semanticList = semanticList.concat(operationSemantics);
        
        
        //Get the semantics from the inputs and outputs
        var theInputs = auxiliarPiece.getInputBoxes();
        var theOutputs = auxiliarPiece.getOutputBoxes();
        
        for(var i=0; i<theInputs.length; i++){
            
            var theSemantics = theInputs[i].getOntologies(); //[data, types]
            
            theSemantics = theSemantics[0].concat(theSemantics[1]);
            
            semanticList = semanticList.concat(theSemantics);
            
        }
    
        for(var i=0; i<theOutputs.length; i++){
            
            var theSemantics = theOutputs[i].getOntologies(); //[data, types]
            
            theSemantics = theSemantics[0].concat(theSemantics[1]);
            
            semanticList = semanticList.concat(theSemantics);
            
        }
        
        //Now transform every semantic in the list into names
        for(var i=0; i<semanticList.length; i++){
            
            var title = The_Ontology.getNodeByID(semanticList[i].id,semanticList[i].ontology).name;
            nameList.push(title);
            
        }
        
        nameList = uniqueElements(nameList);
        
        return nameList;
        
        
        
    }
    
    //Return a list with the titles of every output without repetetions
    function getOutputsNames(){
        
        var nameList = [];
        var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", "Auxiliar");        
        auxiliarPiece.initFromOperationWSDL(this);

        var theOutputs = auxiliarPiece.getOutputBoxes();
        
        for(var i=0; i<theOutputs.length; i++){
            
            nameList.push(theOutputs[i].title);
            
        }
        
        nameList = uniqueElements(nameList);
        
        return nameList;
        
        
    }

    //Return a list with the titles of every input without repetetions
    function getInputsNames(){
        
        var nameList = [];
        var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", "Auxiliar");        
        auxiliarPiece.initFromOperationWSDL(this);

        var theInputs = auxiliarPiece.getInputBoxes();
        
        for(var i=0; i<theInputs.length; i++){
            
            nameList.push(theInputs[i].title);
            
        }
    
        nameList = uniqueElements(nameList);
        
        return nameList;
    }
    
    //This function returns a list with [Ontology, ID] for the given set
    function getSemanticIDs(set){
        
        var return_list = [];
        var semantic_list = semantic.pairsList;
        
        //For every semantic link
        for(var i=0; i<semantic_list.length; i++){
            
            //If the link is from the given set keep going
            if(semantic_list[i].ontology===set){
                
                var name = semantic_list[i].getOntologyName();
                var id = semantic_list[i].getNumber();
                
                return_list.push([name, id]);
                
                
            }
            
        }
    
        return return_list;
        
        
    }
    
    //This function returns the outputs of the operation.
    //If the message was badly constructed it will return the inside elements
    //of the collector element instead (the real outputs)    
    function getOutputElements(){
        
        var myElements = this.outputMessage.getElementsList();
        var myRealOutputs = [];
        
        //If I have only one element that happen to have my same name + Response,and is a complex element
        //then I will take it as sufficient condition to probe that it was
        //badly constructed
        if(myElements.length===1 && myElements[0].name.toUpperCase() === this.name.toUpperCase()+"RESPONSE" && myElements[0].class==="complexElement"){
            
            myRealOutputs = myElements[0].extractElements();
            
        }
        else{
        
            myRealOutputs = myElements;
        
        }
        
        return myRealOutputs;
        
        
    }
    
    //This function returns the inputs of the operation.
    //If the message was badly constructed it will return the inside elements
    //of the collector element instead (the real inputs)
    function getInputElements(){
        
        var myElements = this.inputMessage.getElementsList();
        var myRealInputs = [];
        
        //If I have only one element that happen to have my same name, and is a complex element
        //then I will take it as sufficient condition to probe that it was
        //badly constructed
        if(myElements.length===1 && myElements[0].name.toUpperCase() === this.name.toUpperCase() && myElements[0].class==="complexElement"){
            
            myRealInputs = myElements[0].extractElements();
            
        }
        else{
        
            myRealInputs = myElements;
        
        }
        
        return myRealInputs;
        
        
    }
    
    function getName(){
        return this.name;
    }

    function getSemanticDB(){
                    
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
    
        return myTable;
        
    }
    
    
    //Gives back a semantic table in the form a list with pairs of semantic link and total
    function getSemanticTable(){
        
        //console.log("K");
        
        return this.semantic.getSemanticTable();
        
    }
    
    function toString(){
        
        var final = "";
        
        final+=">>>Operation: "+this.name+"\n";
        
        final+=">>>Semantics: ";
        final+=this.semantic.toString() + "\n";
        
        final+=">>>Inputs: \n";
        if(this.inputMessage===null){
            final+="No inputs \n";    
        }
        else{
            var input_message = this.inputMessage;
            var elements = input_message.getElementsList();
            for(var i=0;i<elements.length;i++){
                
                final += elements[i].toString()+"\n";
                
            }
        }
        
        final+=">>>Outputs: \n";
        if(this.outputMessage===null){
            final+="No outputs \n";    
        }
        else{
            var output_message = this.outputMessage;
            var elements = output_message.getElementsList();
            for(var i=0;i<elements.length;i++){
                
                final+= elements[i].toString()+"\n";
                
            }
        }
    
        return final;
   
    }
}

//Port class
//A port have a name, a semantic and a list of operations
function Port(name,semantic,operationList){
    this.name = name;
    this.semantic = semantic;
    this.operationList = operationList;
    this.class = "port";
    
    this.toString = toString;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.getName = getName;
    this.getOperationList = getOperationList;
    
    function getOperationList(){
        
        return this.operationList;
        
    }
    
    function getName(){
        return this.name;
        
    }

    function getSemanticDB(){
                    
        var myTable = this.semantic.getSemanticTable();
        for(var i=0; i<myTable.length; i++){
            
            myTable[i].push(this.class);
            myTable[i].push(this.name);
            
        }
    
        return myTable;
        
    }
    
    
    
    
    
    function getSemanticTable(){
        
        //console.log("L");
        
        return this.semantic.getSemanticTable();
        
    }
    
    function toString(){
        
        var final = "";
        
        final += "PORT NAME: " + this.name + "\n";
        final += "PORT SEMANTICS: "+ this.semantic.toString() + "\n";
        
        final += "--- Operation List ---\n \n";
        for (var i=0; i<operationList.length; i++){
            
            final += i + ":~~~ \n";
            final += operationList[i].toString();
            final += " :~~~ \n \n \n";
            
        }
                
        return final;
        
    }
}

//WSDL class
//A WSLD is made of ports. It has a name and a link to the internet.
function WSDL(name,link,portList, operationList, messageList, elementList, typesList,schemas){
    //Major elements
    this.name = name;
    this.link = link;
    this.portList = portList;
    this.operationList = operationList;
    this.messageList = messageList;
    this.elementList = elementList;
    this.typesList = typesList;
    this.class = "WSDL";
    
    this.schemas = schemas;

    //functions
    this.toString = toString;
    this.getName = getName;
    this.getLink = getLink;
    this.getPortList = getPortList;
    this.getOperationList = getOperationList;
    this.getMessageList = getMessageList;
    this.getTypesList = getTypesList;
    this.getSemanticTable = getSemanticTable;
    this.getSemanticDB = getSemanticDB;
    this.hasOperation = hasOperation;
    //this.addSchema = addSchema;
    this.getSchema = getSchema;
    //this.initSchemas = initSchemas;
    
    //This function run for every type in the WSDL and set the schema link according to the type name
    function initSchemas(){
        
        for(var i=0; i<this.typesList.length; i++){
            
            var name = this.typesList[i].name;
            var type = this.typesList[i].type;
            
            console.log("Seting schema of "+name + "with type: "+this.typesList[i].type);
            
            //If the name is the form of schema:type
            if(name.indexOf(":")>-1){
                
                var id = name.split(":")[0];
                
                var link = this.getSchema(id);
                
                if(link!==""){
                    
                    this.typesList[i].schema = link;
                    
                }
                else{
                    console.error("Type "+name+" in "+this.name+" have an undefined schema for "+ id);
                }
                
            }
            
        }
        
        
    }
    
    
    //This function return the schema reference for a given ID. If it doesn't exist returns an empty string
    function getSchema(id){
        
        var response = "";
        var found = false;
        
        for(var i=0; i< this.schemas.length && found===false; i++){
            
            if(this.schemas[i][0]===id){
                response = this.schemas[i][1];
                found = true;
            }
            
        }
    
        if(found===false){
            console.error("Try to get "+id+" definition from "+this.name + " NOT FOUND");
        }
    
        return response;
        
    }
    
    //This function add a schema into the schema list. Typically xs, xsd, and the like
    //(ADD THE ERROR CODE; TUTORIALS MISSING!)
    function addSchema(id,target){
        
        this.schemas[id] = target;
        
    }
    
    //This function ask the WSDL if it has an operation inside with the given name
    //If it does return TRUE, and the opposite otherwise
    function hasOperation(name){
        
        var result = false;
        
        //If the name is undefined or nothing, then we return True
        if(name.length<=0){
        
            result = true;
            
        }
    
        //If is a normal string, let check it out
        else{
        

            //For each operation
            for(var i=0; i<this.operationList.length; i++){

                var operation_name = this.operationList[i].getName().toLowerCase();

                /*console.log("---Checking name: "+operation_name);*/

                //Check the name, if it's that one stop the loop and prepare to return True
                if(operation_name.indexOf(name.toLowerCase())>=0){

                    result=true;
                    i=this.operationList.length+1;

                }

            }
        
        }
        
        
        
    
        return result;
        
    }
    
    function getSemanticDB(){
        
        var semanticDB = [];
        
        //Get the table from the ports
        for(var i=0; i<this.portList.length; i++){
            
            semanticDB = semanticDB.concat(this.portList[i].getSemanticDB());
            
        }
        //Get the table from the operations
        for(var i=0; i<this.operationList.length; i++){
            
            semanticDB = semanticDB.concat(this.operationList[i].getSemanticDB());

        }
        
        //Get the table from the elements
        for(var i=0; i<this.elementList.length; i++){
            
            semanticDB = semanticDB.concat(this.elementList[i].getSemanticDB());
        }
        
       
        //Get the table from the types
        for(var i=0; i<this.typesList.length; i++){
            
            semanticDB = semanticDB.concat(this.typesList[i].getSemanticDB());
        }
    
        //Add the WSDL name to each element
        for(var i=0; i<semanticDB.length; i++){
            
            semanticDB[i].push(this.name);
            semanticDB[i].push(this.link);
            
        }
    
    
        return semanticDB;
            
            
    }
    
    function getSemanticTable(){
        
        //console.log("M");
        
        var semantic_table = [];
        
        //Get the table from the ports
        for(var i=0; i<this.portList.length; i++){
            
            semantic_table = mergeSemanticTable(semantic_table,this.portList[i].getSemanticTable());
            
        }
        //Get the table from the operations
        for(var i=0; i<this.operationList.length; i++){
            
            semantic_table = mergeSemanticTable(semantic_table,this.operationList[i].getSemanticTable());

        }
        //Get the table from the elements
        for(var i=0; i<this.elementList.length; i++){
            
            semantic_table = mergeSemanticTable(semantic_table,this.elementList[i].getSemanticTable());
        }
        //Get the table from the types
        for(var i=0; i<this.typesList.length; i++){
            
            semantic_table = mergeSemanticTable(semantic_table,this.typesList[i].getSemanticTable());
        }
        return semantic_table;
    }
    
    
    function getTypesList(){
        return this.typesList;
    }
    
    function getMessageList(){
        return this.messageList;
        
    }
   
    function getOperationList(){
        return this.operationList;
    }
    
    function getPortList(){
        return this.portList;
    }
    
    function getName(){
        
        return this.name;
    }

    function getLink(){
        
        return this.link;
        
    }
    
    
    function toString(){
        var final = "";
        
        final += "WSDL1.1: \n";
        final += "Name: "+this.name +"\n";
        final += "Link: "+this.link +"\n";
        
        final += "\n---SCHEMAS:---"+"\n\n";
        
        for (var i=0; i<this.schemas.length;i++){
            
            final += this.schemas[i][0] + ":" +this.schemas[i][1];
            final += "\n\n";
            
        }
        
        
        final += "\n---PORTS:---"+"\n\n";
        
        for (var i=0; i<portList.length;i++){
            
            final += portList[i].toString();
            final += "\n\n";
            
        }
    
        final += "\n---TYPES:---"+"\n\n";
        for (var i=0; i<typesList.length;i++){
            
            final += typesList[i].toString();
            final += "\n\n";
            
        }
    
    
        final += "\n---ELEMENTS:---"+"\n\n";
        for (var i=0; i<elementList.length;i++){
            
            final += elementList[i].toString();
            final += "\n\n";
            
        }
    
    
        return final;
    
    
    }
    
    
}


}


//------------AUXILIAR------------------------

{
//Given a string with a bunch of links separated by one space each, gives back
//a list of Semantic Objects.
function toSemantic (string){
    
    var list_of_links = string.split(" ");
    var list_of_semantic = [];
    
    //For each link in the string
    for(var i=0;i<list_of_links.length;i++){
        
        //Find out which ontology
        var ontology = "";
        
        for(var j=0; j<ONTOLOGIES.length;j++){
            
            if(list_of_links[i].search(ONTOLOGIES[j])>0){
                ontology = ONTOLOGIES[j];
                j = ONTOLOGIES.length + 10; //Stop looking
            }
            else{
                ontology = "Unknown";
            }
                
        }
    
        //If there are many spaces it will try to append
        //a pair like this [:]
        //Tried to make a regex in the split but it didn't work.
        if(list_of_links[i]!==""){
            var new_Pair = new Pair(ontology,list_of_links[i]);
            list_of_semantic.push(new_Pair);
        
        }
        
    }

    return (new Semantic(list_of_semantic));
    
}

//From a buch of elements find the one given in name.
//If doesn't exist return null
function getElementByName(elementList,name){
    
    var candidate = null;
    
    for(var i=0;i<elementList.length;i++){
        
        if(elementList[i].getName()===name){
            candidate = elementList[i];
            i = elementList.length + 10; //Stop looking
        }
        
    }
    
    return candidate;
}

//From a buch of types find the one given in name.
//If doesn't exist return null
function getTypeByName(typeList,name){
    
    var candidate = null;
    
    for(var i=0;i<typeList.length;i++){
        if(typeList[i].getName()===name){
            candidate = typeList[i];
            i = typeList.length + 10; //Stop looking
        }
        
    }
    
    return candidate;
}

//From a bunch of Messages find the one given in name-
//If doesn't exist return null
function getMessageByName(messageList,name){
    
    var candidate = null;
    
    for(var i=0; i<messageList.length; i++){

        if(messageList[i].getName()===name){
            candidate = messageList[i];
            i = messageList.lenght + 10; //Stop looking
        }
    
    }
    
    return candidate;
        
}

//This function parse a <simpleType> tag and return an object with the SimpleType
function getSimpleTypeFromTag(DOMtag){
    
    var mySimpleType = null; //This is what we are going to return
    
    //Get the name
    var simple_type_name = "";
    if(DOMtag.attributes.getNamedItem("name")!==null){
        simple_type_name = DOMtag.attributes.getNamedItem("name").nodeValue;
    }

    //Get the semantics                  
    var semantic_string = "";
    var semantic_list = new Semantic([]);
    if(DOMtag.attributes.getNamedItem("sawsdl:modelReference")!==null){
        semantic_string = DOMtag.attributes.getNamedItem("sawsdl:modelReference").nodeValue;
        semantic_list = toSemantic(semantic_string);
    }

    //Check if it is fixed
    var fixed = "";
    if(DOMtag.attributes.getNamedItem("fixed")!==null){
        fixed = DOMtag.attributes.getNamedItem("fixed").nodeValue;
    }

    //Get the type of variable
    var simple_type_type = "";

    //The type of varible might be here or in the restrictions as "base" (shouldn't be in base all the time??, why did I wrote that? :-S)
    if(DOMtag.attributes.getNamedItem("type")!==null){
        simple_type_type = DOMtag.attributes.getNamedItem("type").nodeValue;
    }

    //Also, we might have restrictions, so get the restrictions for that variable
    var enumeration_list = [];
    var xml_restriction = DOMtag.getElementsByTagName("restriction");    
    
    //If we have restrictions
    if(xml_restriction.length>0){

        //If the type is in both the element and base I'm going to take the base as valid one.
        if(xml_restriction[0].attributes.getNamedItem("base")!==null){
            simple_type_type = xml_restriction[0].attributes.getNamedItem("base").nodeValue;                                        
        }

        //Check if we have enumerations
        var xml_enumerations = xml_restriction[0].getElementsByTagName("enumeration");
        for(var j=0; j<xml_enumerations.length; j++){

            var enumeration_name = "Unknown Name";
            if(xml_enumerations[j].attributes.getNamedItem("value")!==null){
                enumeration_name = xml_enumerations[j].attributes.getNamedItem("value").nodeValue;
            }
            else{
                console.warn("Found an enumeration without name in simpleType: "+simple_type_name);
            }
        
            //Get the semantics                  
            var enumeration_semantic_string = "";
            var enumeration_semantic_list = new Semantic([]);
            if(xml_enumerations[j].attributes.getNamedItem("sawsdl:modelReference")!==null){
                enumeration_semantic_string = xml_enumerations[j].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                enumeration_semantic_list = toSemantic(enumeration_semantic_string);
            }
        
            var myEnumeration = new Enumeration(enumeration_name,enumeration_semantic_list);
            enumeration_list.push(myEnumeration);

        }
    }

    mySimpleType = new SimpleType(simple_type_name, simple_type_type, semantic_list, enumeration_list, fixed);

    return mySimpleType;

}

//Get the Sequence Object from a tag
//The sequence is going to be defined for either inLine, Ref Elements or choice Elements (hopefully)
function getSequenceFromTag(DOMtag, elementCollection){

    var elementList = [];
    var xml_elements = DOMtag.getElementsByTagName("element");
    var xml_choices = DOMtag.getElementsByTagName("choice");
    
    //The sequence can be compose by elements or choices
    
    //If we have elements
    for(var i=0; i<xml_elements.length; i++){
        
        //If the element is at sequence level
        if( xml_elements[i].parentNode.nodeName === DOMtag.nodeName){
            
            var myCollections = getElementTypesFromTag(xml_elements[i] , elementCollection);
            var myElement = myCollections[0][0];

            elementList.push(myElement);
        }
        
        

    }

    //If we have choices
    for(var i=0; i<xml_choices.length; i++){
        
        //If the element is at sequence level
        if( xml_choices[i].parentNode.nodeName === DOMtag.nodeName){
            
            var myCollections = getElementTypesFromTag(xml_choices[i] , elementCollection);
            var myElement = myCollections[0][0];
            
            elementList.push(myElement);
        }
        
    }
    

    var mySequence = new Sequence(elementList);
    return mySequence;
    
}

//This function parse a <complexType> tag and return an object with the ComplexType
function getComplexTypeFromTag(DOMtag, elementCollection){
    
    //Prepare the list of sequences and the list of attributes
    var sequencesList  = [];
    var attributesList = [];
    
    //Get the name
    var complex_type_name = "";
    if(DOMtag.attributes.getNamedItem("name")!==null){
        complex_type_name = DOMtag.attributes.getNamedItem("name").nodeValue;
    }

    //console.warn("1.- NAME: " + complex_type_name);
    
    //Get the semantics                  
    var semantic_string = "";
    var semantic_list = new Semantic([]);
    if(DOMtag.attributes.getNamedItem("sawsdl:modelReference")!==null){
        semantic_string = DOMtag.attributes.getNamedItem("sawsdl:modelReference").nodeValue;
        semantic_list = toSemantic(semantic_string);
    }

    //Now; a complex type can be one of SimpleContent or one of Sequences + Atrributes
    //Lets makes the two cases:
    
    var xml_simpleContent = DOMtag.getElementsByTagName("simpleContent");
    if(xml_simpleContent.length>0){
        
 
    }
    //Otherwise we are in the Sequences + Atrtributes case
    else{
        //Get the sequences
        var xml_sequences = DOMtag.getElementsByTagName("sequence");    
        for(var i=0; i<xml_sequences.length; i++){

            var mySequence = getSequenceFromTag(xml_sequences[i], elementCollection);

            sequencesList.push(mySequence);

        }
        //Get the attributes
        var xml_attributes = DOMtag.getElementsByTagName("attribute");    
        for(var i=0; i<xml_attributes.length; i++){
            
            var myCollection = getElementTypesFromTag(xml_attributes[i],elementCollection);
            var myAttribute  = myCollection[0][0];

            attributesList = attributesList.concat(myAttribute);
        }
        
    }

    //console.log("2.- " + sequencesList.length + " " + attributesList.length);

    var myComplexType = new ComplexType(complex_type_name,semantic_list,sequencesList,attributesList);
    
    return myComplexType;
    
}

//This function returns a pair of Elements and Types from a XSD link
function getElementTypesFromXSD (xsd,elementsCollection){
    
    //console.log("XSD: "+ xsd);
    
    if(xsd!=="/XSDs/"){
    
        //Open the file
        var xmlhttp=new XMLHttpRequest();        
        xmlhttp.open("GET",xsd,false);
        xmlhttp.send();
        var xmlDoc=xmlhttp.responseXML;

        //Get the schema tag (it should be only one)
        var xml_schema = xmlDoc.getElementsByTagName("schema");

        var collections = getElementTypesFromTag(xml_schema[0],elementsCollection);

        return collections;
    
    
    }
    else{
        return [];
    }
    
}

//This function returns the schemas defined in a XSD file
function getSchemasFromXSD (xsd){
    
    //console.log("XSD: "+ xsd);
    
    var schemas = [];
    
    if(xsd!=="/XSDs/"){
    
        //Open the file
        var xmlhttp=new XMLHttpRequest();        
        xmlhttp.open("GET",xsd,false);
        xmlhttp.send();
        var xmlDoc=xmlhttp.responseXML;

        //Get the schema tag (it should be only one)
        var xml_schema = xmlDoc.getElementsByTagName("schema");

        
        //Get the Schemas
        //Make sure that we have the TAG <??:schema>
        var schema_attributes = null;
        if(xmlDoc.getElementsByTagName("schema").length>0){
        
            schema_attributes = xmlDoc.getElementsByTagName("schema")[0].attributes;
            
        }

        //console.log("--IN XSD SCHEMA--");

        for(var i=0; i<schema_attributes.length; i++){

            //console.log(schema_attributes[i]);    

            var nodeName = schema_attributes[i].nodeName;
            var nodeValue = schema_attributes[i].nodeValue;

            //console.log(nodeName);
            //console.log(nodeValue);

            if(nodeName.indexOf("xmlns:")>-1){

                //console.log("Adding "+ nodeName.split(":")[1] + " to " + nodeValue);
                schemas.push([nodeName.split(":")[1] , nodeValue]);

            }


        }
    
        return schemas;
        
    
    }
    else{
        
        console.error("XSD With Schemas not found!");
        
        return [];
    }
    
}


//This function returns a pair of Elements and Types from a Tag
//Usually you apply this on schema and it will get everything with recursion.
function getElementTypesFromTag(DOMTag, elementsCollection){
    
    //console.log("DOMTag: "+ DOMTag);
    
    //Here we are going to put the stuff.
    var allElementsList = [];
    var allTypesList = [];
    var allSchemas = [];
    
    //First of all we need to check if there are any import schemas inside this schema.
    //If everything is buildt nicely; we are going to use Elements and Types from those imports
    //in our Elements declarations.
    var xml_imports = DOMTag.getElementsByTagName("import");
    
    //console.log("Imports: " + xml_imports);
    
    for (var i=0; i<xml_imports.length; i++){
        
        //There are two things in the import, the name and the location
        //Since JavaScript won't allow us to fecth the file directly in some cases
        //(Probably because the target server don't allow Cross Domain Request)
        //I'm going to copy the name of the file and look it in my XSDs directory.
        
        var xsd_filename = "";
        if(xml_imports[i].attributes.getNamedItem("schemaLocation")!==null){    
            var directories = xml_imports[i].attributes.getNamedItem("schemaLocation").nodeValue.split("/");
            xsd_filename = directories[directories.length - 1];
            //console.log("File: -- " + xsd_filename);
            
        }
        else{
            console.error("Couldn't Parse XSD Filename");
        }
    
        var xsd_path = "/XSDs/"+xsd_filename;
    
        //Add to the Element list.
        var importedCollections = getElementTypesFromXSD(xsd_path,elementsCollection);
        var importedSchemas = getSchemasFromXSD(xsd_path);
        
        if(importedCollections.length !== 0){
        
            allElementsList = allElementsList.concat(importedCollections[0]);
            allTypesList = allTypesList.concat(importedCollections[1]);
            
        }
    
        if(importedSchemas.length !== 0){
            
            allSchemas = allSchemas.concat(importedSchemas);
            
        }
        
    }
    
    //Getting the elements
    //________________________-
    //(There are six elements 1- Inline, 2- Attributes, 3-simple and 4- complex
    //5 references and 6 choices)
    
    //There is a 7º case which is just <element = "name" /> which seems to be worthless; but we have to account for:
    
    //If we arrived to the lowest level possible, the DOMtag is the element
    //itself, so we don't have to look inside but in the tag.    
    var base_case = false;
    var xml_elements = [];
    var xml_attributes = [];
    var xml_choices = [];
    
    /*
    var hasChild = false;
    
    //Check out if it has childs other than annotations or comments or empty texts
    //(I discovered that I can live without this now, but I might need it in the fugure)
    var tag_child = DOMTag.childNodes;
    for(var i=0; i<tag_child.length ; i++){
        
        //console.log("Node; "+tag_child[i].localName);
        
        if(tag_child[i].localName !== "annotation" &&
           tag_child[i].localName !== "null" &&
           tag_child[i].localName !== null){
       
           hasChild = true;
       
       
        }
    }
    */
    
    //Base case
    if(DOMTag.localName === "element" || DOMTag.localName === "attribute" || DOMTag.localName === "choice"){
    
        base_case = true;
        
        //It could be an element or it could be an attribute or it could be a choice
        if(DOMTag.localName === "element"){
            xml_elements.push(DOMTag);    
        }
        else{
            
            if(DOMTag.localName === "attribute"){
                xml_attributes.push(DOMTag);
            }
            else{
                xml_choices.push(DOMTag);
            }
            
            
        }
        
        
    }
    //General case
    else{
        xml_elements = DOMTag.getElementsByTagName("element");
        xml_attributes = DOMTag.getElementsByTagName("attribute");
        xml_choices = DOMTag.getElementsByTagName("choice");
    
    }
    
    //Here we are going to look for cases 1 , 3, 4 and 5
    for(var i=0; i<xml_elements.length ; i++){
        
        //If it is an element at DOMtag level
        if( xml_elements[i].parentNode.nodeName === DOMTag.nodeName || base_case===true){

            //Check if it has a name
            //If it has we are in cases 1, 3 and 4
            if(xml_elements[i].attributes.getNamedItem("name")!== null){
                
              //Get the name
              var name = xml_elements[i].attributes.getNamedItem("name").nodeValue;
              
              //Get the semantics if any
              var semantic_string = "";
              var semantic_list = new Semantic([]);
              if(xml_elements[i].attributes.getNamedItem("sawsdl:modelReference")!==null){
                semantic_string = xml_elements[i].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                semantic_list = toSemantic(semantic_string);
              }
              
              //Check if it has a type OR a fixed
              //If it has is a 1 case (inLine)
              if(xml_elements[i].attributes.getNamedItem("type")!==null ||
                 xml_elements[i].attributes.getNamedItem("fixed")!==null){

                  //In lines elements
                  //We parse only those at DOMTag level, the rest will get parsed automatically.
                  
                  //Get the type, which is string by default.
                  var type = "xs:string";
                  if(xml_elements[i].attributes.getNamedItem("type")!==null){    
                    type = xml_elements[i].attributes.getNamedItem("type").nodeValue;
                  }
              
                  //Check if it fixed
                  var fixed = "";
                  if(xml_elements[i].attributes.getNamedItem("fixed")!==null){
                      fixed = xml_elements[i].attributes.getNamedItem("fixed").nodeValue;
                  }

                  var myInLineElement = new inLineElement(name, type, semantic_list, fixed);
                  
                  allElementsList.push(myInLineElement);
                  
                  //Update the elementCollection if you are schema level Element
                  if(DOMTag.localName === "schema"){
                      elementsCollection.push(myInLineElement);
                  }

              }
              //If it doesn't it means it is a 3 or 4 case
              else{

                //Check if it has a simpleType tag under it.
                                     
                var xml_simpleType = xml_elements[i].getElementsByTagName("simpleType");
                
                //If it does then we are in case 3
                if(xml_simpleType.length>0){
                    
                    var theSimpleType = getSimpleTypeFromTag(xml_simpleType[0]);
                    var mySimpleTypeElement = new simpleElement(name,semantic_list,theSimpleType);
                    
                    allElementsList.push(mySimpleTypeElement);  
                    
                    //Update the elementCollection if you are schema level Element
                    if(DOMTag.localName === "schema"){
                        elementsCollection.push(mySimpleTypeElement);
                    }
                    
                    
                }
                    
                //If it doesn't we might be in case 4
                else{
                    
                    var xml_complexTypes = xml_elements[i].getElementsByTagName("complexType");    
                
                    //Check if we have a complex type tag
                    //If we do we are in case 4
                    if(xml_complexTypes.length>0){
                        
                        var complexTypesList = [];
                        
                        for(var j=0; j<xml_complexTypes.length; j++){
                                
                            var myComplexType = getComplexTypeFromTag(xml_complexTypes[j], elementsCollection);
                            
                            //console.log("Case 4: " + myComplexType.name);
                            
                            complexTypesList.push(myComplexType);
                            
                        }
                    
                        var myComplexElement = new complexElement(name,semantic_list,complexTypesList);
                        
                        allElementsList.push(myComplexElement);
                        
                        //Update the elementCollection if you are schema level Element
                        if(DOMTag.localName === "schema"){
                            elementsCollection.push(myComplexElement);
                        }
                        
                        

                    }
                    //If we don't we found a element which we are not prepared for
                    else{
                        
                        //We don't know which kind of element is if it has a type.
                        if(xml_elements[i].attributes.getNamedItem("type")!==null){

                            console.error("Extrange element found, no name, TAG: "+DOMTag);
                        }
                        //If it does; set the type to undefined and consider it simple
                        else{


                            console.warn("Empty element found, no type, TAG: "+DOMTag);
                            
                            var tempSimpleType = new SimpleType("undefined","undefined",new Semantic([]), [], false);
                            
                            var mySimpleTypeElement = new simpleElement(name,semantic_list,tempSimpleType);


                            allElementsList.push(mySimpleTypeElement);  

                            //Update the elementCollection if you are schema level Element
                            if(DOMTag.localName === "schema"){
                                elementsCollection.push(mySimpleTypeElement);
                            }

                        } 
                   }
                   
                }
              }
            }
            //If it doesn't we might be in case 5 (reference)
            else{
                
                //Check if we have a reference tag
                //If we do we are in case 5
                if(xml_elements[i].attributes.getNamedItem("ref")!==null){
                    var text = xml_elements[i].attributes.getNamedItem("ref").nodeValue;
                    var reference = "";
                    
                    //Adjust the name and take out the schema for now.
                    if(text.search(":")>0){
                        reference = text.split(":")[1];    
                    }
                    else{
                        reference = text;
                    }
        
                    //See if the reference is in the elements we gave to the function                    
                    var myElement = getElementByName(elementsCollection,reference);
        
                    //If is not we still have a chance
                    if(myElement===null){
                        
                        myElement = getElementByName(allElementsList,reference);
                        
                        //Check if it is in the list of Element we are making
                        //If it isn't then we couldn't find it
                        if(myElement===null){    
                            console.error("The reference to "+reference + " was not found in the Element collection");
                        }
                        //Otherwise put with the rest
                        else{
                            
                            allElementsList.push(myElement);    
                            
                            //It doesn't have sense to update here because a ref at schema level would
                            //be a duplicate of another element which would be wrong
                        }
                    }
                    //If it is then put it with the rest
                    else{
                        
                        allElementsList.push(myElement);
                        
                        
                        //It doesn't have sense to update here because a ref at schema level would
                        //be a duplicate of another element which would be wrong
                        
                    }
                    
                }
                //If we don't we found a element which we are not prepared for or case 7
                else{
                    
                    //We don't know which kind of element is if it has a type.
                    if(xml_elements[i].attributes.getNamedItem("type")!==null){
                    
                        console.error("Extrange element found, no name, TAG: "+DOMTag);
                    }
                    //If it does; set the type to undefined and consider it simple
                    else{
                        
                    
                        console.warn("Empty element found, no type, TAG: "+DOMTag);
                        
                        var tempSimpleType = new SimpleType("undefined","undefined",new Semantic([]), [], false);
                        
                        var mySimpleTypeElement = new simpleElement(name,semantic_list,tempSimpleType);
                    
                        allElementsList.push(mySimpleTypeElement);  
                    
                        //Update the elementCollection if you are schema level Element
                        if(DOMTag.localName === "schema"){
                            elementsCollection.push(mySimpleTypeElement);
                        }
                        
                        
                    }
                    
                    
                        
                }
            }
        }        
    }

    //Here we are going to look for case 2 (attributes)
    //This case is very similar to the InLine case or SimpleTypes. This is going to be almost a
    // copy paste of the code above, the problem is that I cannot concat xml_elements with xml_attributes    
    for(var i=0 ; i<xml_attributes.length ; i++){
        
        //If it is an element at DOMtag level
        if( xml_attributes[i].parentNode.nodeName === DOMTag.nodeName || base_case===true){

            //Check if it has a name
            //If it has we are in cases 1, 3 and 4
            if(xml_attributes[i].attributes.getNamedItem("name")!== null){
                
              //Get the name
              var name = xml_attributes[i].attributes.getNamedItem("name").nodeValue;
              
              //Get the semantics if any
              var semantic_string = "";
              var semantic_list = new Semantic([]);
              if(xml_attributes[i].attributes.getNamedItem("sawsdl:modelReference")!==null){
                semantic_string = xml_attributes[i].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                semantic_list = toSemantic(semantic_string);
              }
              
              //Check if it has a type OR a fixed
              //If it has is a 1 case (inLine)
              if(xml_attributes[i].attributes.getNamedItem("type")!==null ||
                 xml_attributes[i].attributes.getNamedItem("fixed")!==null){

                  //In lines elements
                  //We parse only those at DOMTag level, the rest will get parsed automatically.
                  
                  //Get the type, which is string by default.
                  var type = "xs:string";
                  if(xml_attributes[i].attributes.getNamedItem("type")!==null){    
                    type = xml_attributes[i].attributes.getNamedItem("type").nodeValue;
                  }
              
                  //Check if it fixed
                  var fixed = "";
                  if(xml_attributes[i].attributes.getNamedItem("fixed")!==null){
                      fixed = xml_attributes[i].attributes.getNamedItem("fixed").nodeValue;
                  }

                  var myInLineElement = new inLineElement(name, type, semantic_list, fixed);
                  
                  allElementsList.push(myInLineElement);
                  
                  //Update the elementCollection if you are schema level Element
                  if(DOMTag.localName === "schema"){
                      elementsCollection.push(myInLineElement);
                  }

              }
              //If it doesn't it means it is a 3 or 4 case
              else{

                //Check if it has a simpleType tag under it.
                                     
                var xml_simpleType = xml_attributes[i].getElementsByTagName("simpleType");
                
                //If it does then we are in case 3
                if(xml_simpleType.length>0){
                    
                    var theSimpleType = getSimpleTypeFromTag(xml_simpleType[0]);
                    var mySimpleTypeElement = new simpleElement(name,semantic_list,theSimpleType);
                    
                    allElementsList.push(mySimpleTypeElement); 
                    
                    //Update the elementCollection if you are schema level Element
                    if(DOMTag.localName === "schema"){
                        elementsCollection.push(mySimpleTypeElement);
                    }
                    
                }
                    
                //If it doesn't we might be in case 4
                //(We shouldn't have a complex attribute I think)
                else{
                    
                    var xml_complexTypes = xml_attributes[i].getElementsByTagName("complexType");    
                
                    //Check if we have a complex type tag
                    //If we do we are in case 4
                    if(xml_complexTypes.length>0){
                        
                        var complexTypesList = [];
                        
                        for(var j=0; j<xml_complexTypes.length; j++){
                                
                            var myComplexType = getComplexTypeFromTag(xml_complexTypes[j], elementsCollection);                            
                            
                            //console.log("Case 4.2: " + myComplexType.name);
                            
                            complexTypesList.push(myComplexType);
                            
                        }
                    
                        var myComplexElement = new complexElement(name,semantic_list,complexTypesList);
                        
                        allElementsList.push(myComplexElement);
                        
                        //Update the elementCollection if you are schema level Element
                        if(DOMTag.localName === "schema"){
                            elementsCollection.push(myComplexElement);
                        }
                    }
                    //If we don't we found a element which we are not prepared for
                    else{
                        
                        console.error("Extrange element found, named: "+name);       
                        
                    }   
                }
              }
            }
            //If it doesn't we might be in case 5 (reference)
            else{
                
                //Check if we have a reference tag
                //If we do we are in case 5
                if(xml_attributes[i].attributes.getNamedItem("ref")!==null){
                    
                    var text = xml_attributes[i].attributes.getNamedItem("ref").nodeValue;
                    var reference = "";
                    
                    //Adjust the name and take out the schema for now.
                    if(text.search(":")>0){
                        reference = text.split(":")[1];    
                    }
                    else{
                        reference = text;
                    }
        
                    //See if the reference is in the elements we gave to the function                    
                    var myElement = getElementByName(elementsCollection,reference);
        
                    //If is not we still have a chance
                    if(myElement===null){
                        
                        myElement = getElementByName(allElementsList,reference);
                        
                        //Check if it is in the list of Element we are making
                        //If it isn't then we couldn't find it
                        if(myElement===null){    
                            console.error("The reference to "+reference + " was not found in the Element collection");
                        }
                        //Otherwise put with the rest
                        else{
                            
                            allElementsList.push(myElement);    
                            //It doesn't have sense to update here because a ref at schema level would
                            //be a duplicate of another element which would be wrong
                        }
                    }
                    //If it is then put it with the rest
                    else{
                        
                        allElementsList.push(myElement);
                        //It doesn't have sense to update here because a ref at schema level would
                        //be a duplicate of another element which would be wrong
                        
                    }
                    
                }
                //If we don't we found a element which we are not prepared for
                else{
                    console.error("Extrange attribute found, no name, TAG: \n");
                    console.error (DOMTag);
                        
                }
            }
        }
        
    }
    
    //Here I'm going to look for the case 6
    for(var i=0 ; i<xml_choices.length ; i++){
        
        //If it is an element at DOMtag level
        if( xml_choices[i].parentNode.nodeName === DOMTag.nodeName || base_case===true){

            var id ="";
            //Check if it has an ID
            if(xml_choices[i].attributes.getNamedItem("id")!== null){        
              //Get the name
              id = xml_choices[i].attributes.getNamedItem("id").nodeValue;
        
            }
        
            //Get the semantics if any
            var semantic_string = "";
            var semantic_list = new Semantic([]);
            if(xml_choices[i].attributes.getNamedItem("sawsdl:modelReference")!==null){
                semantic_string = xml_choices[i].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                semantic_list = toSemantic(semantic_string);
            }
        
            //Check which elements are the options
            //(Hopefully you only have elements and not attributes)
            var xml_choiceElements = xml_choices[i].getElementsByTagName("element");
            var choiceElementsList  = [];
            for(var j=0; j<xml_choiceElements.length; j++){
                
                var myElement = getElementTypesFromTag(xml_choiceElements[j],elementsCollection)[0][0];
                choiceElementsList.push(myElement);
                
            }
            
            var myChoiceElement = new choiceElement(id,semantic_list,choiceElementsList);
            allElementsList.push(myChoiceElement);
        
        }        
    }
    
    
    //If you are not a base case then you might have simple and complex types
    if(base_case===false){
        
        //Getting the types
        //________________________-

        //Simple Types
        var xml_simple_types = DOMTag.getElementsByTagName("simpleType");

        for(var i=0; i<xml_simple_types.length ; i++){

            //If it is a Type at DOMtag level
            if( xml_simple_types[i].parentNode.nodeName === DOMTag.nodeName){

                var mySimpleType = getSimpleTypeFromTag(xml_simple_types[i]);

                allTypesList.push(mySimpleType);

            }

        }

        //Complex Types
        var xml_complex_types = DOMTag.getElementsByTagName("complexType");

        for(var i=0; i<xml_complex_types.length ; i++){

            //If it is a Type at DOMtag level
            if( xml_complex_types[i].parentNode.nodeName === DOMTag.nodeName){

                var myComplexType = getComplexTypeFromTag(xml_complex_types[i],elementsCollection);
                
                //console.log("Case Element?: " + myComplexType.name);

                allTypesList.push(myComplexType);

            }
        }        
    }
    
    return [allElementsList,allTypesList,allSchemas];
}
 
 
 //Transform a InLine element into another kind of Element if the InLine Element have
 //a complex type which is inside the provided list.
 //The function will return a new element transformed based on the one given in the parameter.
 //It will return the same element if it wasn't possible to transform.
 function inLineToOther(element,typesList){
     
     var newElement = element;
     var elementType = element.type;
     
     //The type can be in two formats
     //(1) schema_tag : datatype , ie. xs:string . Usually like this
     //(2) datatype, ie. string. Very very weird.
        
      //If we are in case (1)
      if(elementType.indexOf(":") !== -1){
        
            elementType = elementType.split(":")[1];
            
      }
      //If we are in case (2) everything is setup already
     
     var candidateType = getTypeByName(typesList, elementType);
     
     //Check if we found the type we are looking for
     if(candidateType !== null){
         
         //If it is a complex transform it into complex
         if(candidateType.class==="complexType"){
             
             var myComplexElement = new complexElement(element.name,element.semantic,[candidateType]);
             newElement = myComplexElement;

         }
         //If it is a simple transform it into simple
         else if(candidateType.class==="simpleType"){
             
             var mySimpleTypeElement = new simpleElement(element.name,element.semantic,candidateType);
             newElement = mySimpleTypeElement;
             
         }
         //If it is something unknown beware the user of that
         else{
             console.warn("Element "+element.name+" have type "+element.type+" which I don't know how to parse");
         }
         
     }
     //If the type wasn't on the list beware the user about it
     else{
         console.warn("Element "+element.name+" have type "+element.type+" which I couldn't found");
     }
     
     return newElement;
     
 }
 
//Opens a WSDL file and return a WSDL object
function getWSDL(wsdlFile){
    
    //Open the file
    var xmlhttp=new XMLHttpRequest();        
    xmlhttp.open("GET",wsdlFile,false);
    xmlhttp.send();
    var xmlDoc=xmlhttp.responseXML;
    
    //console.log(wsdlFile);
    //console.log(xmlDoc);
    
    //Make sure that we have the TAG <wsdl:definitions>
    var definitions_attributes = null;
    if(xmlDoc.getElementsByTagName("definitions").length>0){
        
        definitions_attributes = xmlDoc.getElementsByTagName("definitions")[0].attributes; //I don't care if there are no attributes
                                                                                           //By default there is a 'null' value for each attribute
                                                                                           //So I will check individually for attribute later.
    }
    else{
        console.error("No TAG wsdl:definitions detected"+"\n");   
    }
    
    //Get the name of the WSDL
    var name = "Unnamed";
    if(definitions_attributes.getNamedItem("name")!==null){
        name = definitions_attributes.getNamedItem("name").nodeValue;
    }
    
    //Get the link of the WSDL
    var link = "Unknown link";
    if(definitions_attributes.getNamedItem("targetNamespace")!==null){
        link = definitions_attributes.getNamedItem("targetNamespace").nodeValue;
    }

    //If there is no name in the definition get from the service tag.
    var xml_service = xmlDoc.getElementsByTagName("service");
    if(name==="Unnamed"){
        name = xml_service[0].attributes.getNamedItem("name").nodeValue;
    }
    
    
    var schemas = [];
    
    //Get the Schemas

    for(var i=0; i<definitions_attributes.length; i++){
        
        //console.log(definitions_attributes[i]);    
        
        var nodeName = definitions_attributes[i].nodeName;
        var nodeValue = definitions_attributes[i].nodeValue;
        
        //console.log(nodeName);
        //console.log(nodeValue);
        
        if(nodeName.indexOf("xmlns:")>-1){
            
            //console.log("Adding "+ nodeName.split(":")[1] + " to " + nodeValue);
            schemas.push([nodeName.split(":")[1] , nodeValue]);
            
        }
        
        
    }

    /**
    console.log("--FINAL--"+schemas.length);

    for(var i=0; i<schemas.length; i++){
        
        console.log(schemas[i]);
        
    }

    console.log("-/--");
    **/
    
    //Get the Types from the file
    var xml_types = xmlDoc.getElementsByTagName("types");
    var elementList = [];
    var typeList = [];
    
    if(xml_types.length>0){
        
        var xml_schema = xml_types[0].getElementsByTagName("schema");
        
        for(var z=0; z<xml_schema.length; z++){

            var collections = getElementTypesFromTag(xml_schema[z],[]);
            elementList = elementList.concat(collections[0]);
            typeList = typeList.concat(collections[1]);
            schemas = schemas.concat(collections[2]);

            //Now here; some of the Types in some elements can be complex, although
            //they can still be defined as InLine element. We need to transform those
            //InLine elements into complex types. (or simple types if that's the case)

            //However; not all the InLine elements are going to be modify.
            //Those who are strings , or ints, or an elemental datatypes will remain the same.

            //Go throw the whole elementList and copy those which are going to remain into
            //a list; and those which we are goint to modify into another.
            var fixedElements = [];
            var modifyElements = [];
            for(var i=0; i<elementList.length; i++){

                //Check if this is an inLine Element
                if(elementList[i].class==="inLineElement"){

                    //If it is we might want to change it
                    //Check if it not an elemetal type
                    if(elementList[i].isElemental()===false){
                        //If it is not, we do want to change it
                        modifyElements.push(elementList[i]);

                    }
                    //Since it is an elemental type, we actually don't want to change it
                    else{
                        fixedElements.push(elementList[i]);    
                    }



                }
                //If it not an inline is for sure that we don't want to modify it
                else{
                    fixedElements.push(elementList[i]);
                }

            }

            //Now; try to change those which we want to modify and put them in a list
            var newElements = [];
            for(var i=0; i<modifyElements.length; i++){
                newElements.push(inLineToOther(modifyElements[i],typeList));
            }


            //Rebuild the element List once again
            elementList = [];
            for(var i=0; i<fixedElements.length; i++){
                elementList.push(fixedElements[i]);
            }
            for(var i=0; i<newElements.length; i++){
                elementList.push(newElements[i]);
            }



            //Until here we have fixed the first level row InLine elements.
            //There are still however, many inlines elements inside the complex
            //and choice elementes that haven't beeing modify.
            //So we are going to do the exactly same thing for those.

            //The elementes inside these complex elements are related to
            //the simples and complex types. So if we modify the types we modify
            //everything.

            //The simple types have no need to be modify; we just need to adjust
            //the complex types.
            for(var i=0; i<typeList.length ; i++){

                //For each complexType
                if(typeList[i].class==="complexType"){

                    var myComplexType = typeList[i];

                    //For each list of Sequence inside it
                    for(var j=0; j<myComplexType.listOfSequences.length; j++){

                        var candidateSequence = myComplexType.listOfSequences[j];

                        //For each element inside that sequence
                        for(var k=0; k<candidateSequence.list_of_elements.length; k++){

                            var candidateElement = candidateSequence.list_of_elements[k];

                            //Check if the element is InLine
                            if(candidateElement.class === "inLineElement"){

                                //Check if the inLine element is not elemental
                                if(candidateElement.isElemental() === false){

                                    //At this point we need to change this element
                                    //for it complex/simple form.
                                    var newElement = inLineToOther(candidateElement,typeList);
                                    candidateSequence.list_of_elements[k] = newElement;

                                }

                            }

                        }

                    }

                    //For each attribute in the complex list
                    for(var j=0; j<myComplexType.listOfAttributes.length; j++){


                        var candidateElement = myComplexType.listOfAttributes[j];

                        if(typeof candidateElement !== "undefined"){   

                        //Check if the element is InLine
                        if(candidateElement.class === "inLineElement"){

                            //Check if the inLine element is not elemental
                            if(candidateElement.isElemental() === false){

                                //At this point we need to change this element
                                //for it complex/simple form.
                                var newElement = inLineToOther(candidateElement,typeList);
                                myComplexType.listOfAttributes[j] = newElement;

                            }   
                        }

                        }
                    }
                }
            }


            //Now the last thing we need to do is to change the InLine elements
            //that need to be change inside the choice elements

            /*DO SOMETHING HERE*/

            //Finally; take a look at the elements again, some of the bad
            //variables named which are complex could be still not changed
            for(var i=0; i<elementList.length ; i++){

                var testingElement = elementList[i];

                if(testingElement.class === "complexElement"){

                    //For each of the possible complex types (typically only one)
                    for(var l=0; l<testingElement.listOfComplexTypes.length; l++){

                        var myComplexType = testingElement.listOfComplexTypes[l];

                        //console.log(myComplexType.name);

                        //For each list of Sequence inside it
                        for(var j=0; j<myComplexType.listOfSequences.length; j++){

                            var candidateSequence = myComplexType.listOfSequences[j];

                            //For each element inside that sequence
                            for(var k=0; k<candidateSequence.list_of_elements.length; k++){

                                var candidateElement = candidateSequence.list_of_elements[k];

                                //Check if the element is InLine
                                if(candidateElement.class === "inLineElement"){

                                    //Check if the inLine element is not elemental
                                    if(candidateElement.isElemental() === false){
                                        //At this point we need to change this element
                                        //for it complex/simple form.
                                        var newElement = inLineToOther(candidateElement,typeList);
                                        candidateSequence.list_of_elements[k] = newElement;
                                    }
                                }
                            }
                        }

                        //For each attribute in the complex list
                        for(var j=0; j<myComplexType.listOfAttributes.length; j++){

                            var candidateElement = myComplexType.listOfAttributes[j];

                            //Check if the element is InLine
                            if(candidateElement.class === "inLineElement"){

                                //Check if the inLine element is not elemental
                                if(candidateElement.isElemental() === false){
                                    //At this point we need to change this element
                                    //for it complex/simple form.
                                    var newElement = inLineToOther(candidateElement,typeList);
                                    myComplexType.listOfAttributes[j] = newElement;                                
                                }   
                            }
                        }
                    }
                }

            }

    
        }
    
    }
    else{
        console.error("No TAG wsdl:types detected; could this be a WS without variables?");
    }
    
    /**
    console.log("-----ALL ELEMENTS--------");
    for(var i=0; i<elementList.length; i++){
    
        console.log("-E------------");
        console.log(elementList[i].toString());
        console.log("-/E------------");
        
    }
    console.log("-----ALL TYPES--------");
    for(var i=0; i<typeList.length; i++){
        
        console.log("-T------------");
        console.log(typeList[i].toString());
        console.log("-/T------------");
        
    }
    **/
    
    
    //Get the Messages from the file
    var AllMessagesList = [];
    var xml_messages = xmlDoc.getElementsByTagName("message");
    
    if(xml_messages.length>0){
                    
        //For all the messages in the file
        for(var i=0; i<xml_messages.length; i++){
                                
            var message_attribute_name = xml_messages[i].attributes.getNamedItem("name").nodeValue;
            
            //console.log("Message: "+message_attribute_name);
                                                           
            //Get all the parts (typically one)
            var message_part_tags = xml_messages[i].getElementsByTagName("part");
            var part_list = [];
                                    
            for(var j=0; j<message_part_tags.length; j++){
                
                //Get the name and the element
                var part_name = message_part_tags[j].attributes.getNamedItem("name").nodeValue;
                
                
                //If the message is well defined, it will have an element call inside.
                //If is it not standar it will have a type that refers to an element.
                //So lets check which one we have.
                var element_name = "";
                var element_type = "";
                var schema = "";
                if(message_part_tags[j].attributes.getNamedItem("element")!== null){
                    element_name = message_part_tags[j].attributes.getNamedItem("element").nodeValue.split(":")[1];
                }
                else{
                    if(message_part_tags[j].attributes.getNamedItem("type")!== null){
                        element_type = message_part_tags[j].attributes.getNamedItem("type").nodeValue.split(":")[1];        
                        schema = message_part_tags[j].attributes.getNamedItem("type").nodeValue.split(":")[0];        
                        element_name = message_part_tags[j].attributes.getNamedItem("name").nodeValue;        
                    }
                    else{
                        console.error("Bad message part in "+message_attribute_name);
                    }
                    
                }
                
                
                
                //Find that element in the elements list; it could be
                //in the simple list or the complex list.
                var element = getElementByName(elementList,element_name);
                
                //If you didn't find it 
                //Is possible that something went wront and it didn't exist and the WSDL file is broken
                //Or it could be that is a element defined in the message part
                if(element === null){
                    
                    var type = getTypeByName(typeList,element_type);
                    
                    if(type === null || ELEMENTAL_DATATYPES.indexOf(element_type) > -1){

                        //At this point; is impossible to say that the WSDL is damage or the message define the element.
                        //I'm going to assume that is good and give a warning

                        console.warn("Message "+message_attribute_name+", With name "+element_name+" and type "+element_type +" found. Assumed element");

                        //Check out for semantics. Add them to the element
                        
                        //Get the semantics                  
                        var semantic_string = "";
                        var semantic_list = new Semantic([]);
                        if(message_part_tags[j].attributes.getNamedItem("sawsdl:modelReference")!==null){
                            semantic_string = message_part_tags[j].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                            semantic_list = toSemantic(semantic_string);
                        }

                        var whole_type = schema + ":" + element_type;
                        var tempSimpleType = new SimpleType(whole_type, whole_type,new Semantic([]), [], false);    
                        var mySimpleTypeElement = new simpleElement(element_name,semantic_list,tempSimpleType);
                        var myPart = new Part(part_name,mySimpleTypeElement);
                        part_list.push(myPart);
                        //console.error("Message "+message_attribute_name+", Part "+part_name+" couldn't found his element "+element_name);                            
                        
                    }
                    else{
                        
                        //Could be that the type is simple or complex:
                        if(type.class === "simpleType"){
                            
                            //console.log("----> Adding New Simple Element with name: "+element_name);
                            var mySimpleTypeElement = new simpleElement(element_name,new Semantic([]),type);
                            //console.log(mySimpleTypeElement.toString());
                            var myPart = new Part(part_name,mySimpleTypeElement);
                            part_list.push(myPart);                            
                        }
                        else if(type.class === "complexType"){
                            
                            //console.log("----> Adding New Complex Element with name: "+element_name);
                            var myComplexElement = new complexElement(element_name,new Semantic([]),[type]);
                            //console.log(myComplexElement.toString());
                            var myPart = new Part(part_name,myComplexElement);
                            part_list.push(myPart);                            
                        }
                        else{
                        
                            //Last chance! Maybe you are an element defined as a type
                            element = getElementByName(elementList,element_type);        
                        
                            if(element===null){
                                console.error("Message "+message_attribute_name+", Part "+part_name+" couldn't found his type "+element_type + "type");
                                console.log(type.toString());
                            }
                            else{
                                var myPart = new Part(part_name,element);
                                part_list.push(myPart);                                
                            }
                        }
                    }
                }    
            
                //Otherwise add the element to the part and the part to the list of parts
                else{
                    var myPart = new Part(part_name,element);
                    part_list.push(myPart);
                }
            
                
            }
                                    
            //At this point we have all the part of the messages                        
            myMessage = new Message(message_attribute_name, part_list);
            AllMessagesList.push(myMessage);
        }
    }                
    else{
        console.error("No messages found in the document");
    }

    
    //Get all the Operations from the file
    //Is there a WS out there where two ports shares operations?
    
    
    //Get the port list
    var portList = [];
    var ports = xmlDoc.getElementsByTagName("portType");
    
    if(ports.length===0){
        console.error("No TAG wsdl:portType detected"+"\n");
    }
    //For each port in the WSLD (typically only one per Web Service)
    for (var i=0; i<ports.length;i++){
        
        var port_attributes = ports[i].attributes;
      
        //Get the name of the port
        var port_name = "Unnamed";
        if(port_attributes.getNamedItem("name")!==null){
            port_name = port_attributes.getNamedItem("name").nodeValue;
        }
      
        //Get the semactics of the port
        var semantic_list = new Semantic([]);
        var semantic_string = "";
        if(port_attributes.getNamedItem("sawsdl:modelReference")!==null){
            semantic_string = port_attributes.getNamedItem("sawsdl:modelReference").nodeValue;
            semantic_list = toSemantic(semantic_string);
        }
        
        //Get the operations
        var operation_list = [];
        var operations = ports[i].getElementsByTagName("operation");
        //If there are no operation communicate the error
        if(operations.length===0){
            console.error("No TAG wsdl:operation detected for port "+port_name+"\n");
        }
        //Otherwise go ahead and parse them 
        else{
            
            //For each operation inside that port
            for(var j=0;j<operations.length;j++){
                
                //Get the name of the operation
                var operation_name = "Unnamed";
                
                var operation_attributes = operations[j].attributes;
                if(operation_attributes.getNamedItem("name")!==null){
                    operation_name = operation_attributes.getNamedItem("name").nodeValue;
                    
                }
            
                //Get the list of semantics
                var operation_semantics_tag = operations[j].getElementsByTagName("attrExtensions");
                var operation_semantics = new Semantic([]);
                if(operation_semantics_tag.length>0){
                    var semantic_text = operation_semantics_tag[0].attributes.getNamedItem("sawsdl:modelReference").nodeValue;
                    operation_semantics = toSemantic(semantic_text);
                     
                }
            
                //Get the input message if there is any
                var operation_input_tag = operations[j].getElementsByTagName("input");
                var operation_input_message = null;
                if(operation_input_tag.length>0){
                    //Get the message name
                    var operation_message_name = operation_input_tag[0].attributes.getNamedItem("message").nodeValue.split(":")[1];
                    
                    //Look in the entire document which one is that message
                    var myMessage = getMessageByName(AllMessagesList,operation_message_name);
                    //If you couldn't find it communicate it
                    if(myMessage === null){
                        console.error("Operation "+operation_name+" couldn't find its input message "+operation_message_name);
                        
                    }
                    //Otherwise get the reference
                    else{
                        operation_input_message = myMessage;
                    }
                }
                
                //Get the output message
                var operation_output_tag = operations[j].getElementsByTagName("output");
                var operation_output_message = null;
                if(operation_output_tag.length>0){
                    //Get the message name
                    var operation_message_name = operation_output_tag[0].attributes.getNamedItem("message").nodeValue.split(":")[1];
                    
                    //Look in the entire document which one is that message
                    var myMessage = getMessageByName(AllMessagesList,operation_message_name);
                    //If you couldn't find it communicate it
                    if(myMessage === null){
                        console.error("Operation "+operation_name+" couldn't find its output message "+operation_message_name);
                        
                    }
                    //Otherwise get the reference
                    else{
                        operation_output_message = myMessage;
                    }
                }
            
                var myOperation = new Operation(operation_name,operation_input_message,operation_output_message,operation_semantics);
                operation_list.push(myOperation);
            }
        }
        
        portList.push(new Port(port_name,semantic_list,operation_list));
    }
    
    //Create the WSLD object
    var myWSDL = new WSDL(name,link,portList,operation_list,AllMessagesList,elementList,typeList,schemas);
    //myWSDL.initSchemas();
    return myWSDL;
}


function SemanticTableToString(table){

    var final = "[";

    for(var i=0; i<table.length; i++){
        
        final += "{"+table[i][0] + "," + table[i][1] + "} \n";
    }

    final += "]";
    return final;
    
}


function DBToString(table){

    var final = "[ \n";

    for(var i=0; i<table.length; i++){
        
        final += "{";
        
        for(var j=0; j<table[i].length; j++){
            
            final += table[i][j] + ",";
            
        }
        
        final += "} \n";
    }

    final += "]";
    return final;
    
}


function mergeSemanticTable(tableA, tableB){
    
    var myFinalTable = [].concat(tableA);
    
    //For each element of table B
    var found = -1;
    for(var i=0; i<tableB.length; i++){
        
        found = -1;
        
        //Check out if it is in table A    
        for(var j=0; j<tableA.length; j++){
            
            if(tableB[i][0] === tableA[j][0]){
                
                found = j;
                j = tableA.length+10; //Stop looking
            }
            
            
        }
        //if not, add it
        if(found<0){
            myFinalTable.push(tableB[i]);
        }
        //if it is, sum the totals
        else{
            myFinalTable[found][1] += tableB[i][1];
        }
    }

    return myFinalTable;
}

function getIndexElementInTable(table, element){
    
    var index = -1;
    
    for(var i=0; i<table.length; i++){
        
        if(table[i][0]===element){
            index = i;
            i = table.length + 10; //Stop looking
        }

    }
    
    return index;
    
}

//Goes inside the WSDL list and return the first wsdl which name match the name
function getWSDLByName(name){
    
    var candidate = null;
    var found = false;
    
    for(var i=0; i<WSDL_list.length && found===false; i++){
        
        if(WSDL_list[i].name === name){
            
            candidate = WSDL_list[i];
            found = true;
            
        }
        
    }
    
    
    return candidate;
    
}

}


//___________________________________________
//           ONTOLOGY STUFF
//___________________________________________

//------------CLASES--------------------------
{

//NOTE!!


//The files of the OBO file (v1.2) that I'm parsing are not sorted by
//"order of appearance", meaning that DATA_0582 makes reference to
//DATA_3031 without defining it first.
 
//So in oder to have all the references built nicely first I'm going
// to add into the arrays the ID and later on modify the ID by the
// proper reference.
 
// METHOD A: References only (I'm using this)
// 
// PROS: Random read in order of 1. (The quickest possible)
// CONS: Is going to take a lot of time to initialize the data structure
// 		 I'm guessing O(n²) but it could be worse due hidden constants
// 
// If I don't do this
// 
// METHOD B: IDs only
// 
// PROS: Initializing the data structure in O(n).
// CONS: Random read in O(log(n)).
// 
// Which one is better? That's depends on how many access to memory you
// are planning. However; I can modify the file so after it is parse once
// it generated a new file with the references defined before usage. At
// least let see how long does it take on average to initialize it.
// 
// In C, once you are finish creating the ontology for the first time,
// you could just copy the memory into a binary file and then dump
// it into memory again next time you want to do something; that would
// be the fastest way possible.
 
 

//This class represent the whole ontology
//textFromFile is a string with content of the ontology file
function Ontology(textFromFile){

	this.ontologyText = textFromFile;

	this.datas = [];
	this.operations = [];
	this.formats = [];
	this.topics = [];
	
	//Methods
	this.init = init;
	this.getNodeByID = getNodeByID;
	this.toString = toString;
	this.distance = distance;
        this.distanceComplete = distanceComplete;
        
	//Returns a compresive string with the ontology information
	function toString(){
		var result = "";
		
		//Show a summary
		result += "Ontology summary: \n";
		
		result += "Total DATAs: "+ this.datas.length + "\n";
		result += "Total OPERATIONs: "+ this.operations.length +"\n";
		result += "Total FORMATs: "+ this.formats.length +"\n";
		result += "Total TOPICs: "+ this.topics.length +"\n";
		
		result += ""+ "\n";
		
		//Print the info of every data
		for(var i=0; i<this.datas.length; i++){
		
			result += this.datas[i].toString();
			
		}
			
		
		//For each format
		for(var i=0; i<this.formats.length; i++){
		
			result += this.formats[i].toString();
		}
		
		
		//Print the info of every operation
		for(var i=0; i<this.operations.length; i++){
		
			result += this.operations[i].toString();
		}
		
		//Print the info of every topic
		for(var i=0; i<this.topics.length; i++){
			
			result += this.topics[i].toString();
										
		}
		
		
		return result;
	}
	
	//Initialize the whole Ontology
	function init(){
		
		var readingTerm = false;
		var readingData = false;
		var readingOperation = false;
		var readingTopic = false;
		var readingIdentifier = false;
		var readingFormat = false;
		var idRead = false;
		var id = "";
		var ontology_set = "";
		var number = 0;
		var name = "";
		var is_a = [];
		var has_topic = [];
		var has_inputs = [];
		var has_outputs = [];
		var is_format_of = [];
		var is_identifier_of = [];
		
		var ontologyLines = this.ontologyText.split("\n");
		
		//For every line in the file
		for(var i=0; i<ontologyLines.length; i++){
			
			var line = ontologyLines[i];
			
                        //console.log(line);
			
			
			//If the line doesn't start with the comment mark
			if (line.substring(0, 1) !== "!") {
				
				//If we found a term block start processing it
				if(line.indexOf("[Term]") !== -1){
					readingTerm = true;
				}
				else{
					//If we are inside a term block
					if(readingTerm===true){
						
						//If we are reading the ID field (must come first after Term)
						if(line.indexOf("id:") !== -1){
							
							if(idRead===false){
							
                                                            id = line.split(" ")[1];
                                                            number = parseInt(id.split(":")[1],10);
                                                            ontology_set = id.split(":")[0].split("_")[1];
								
                                                            idRead = true;
								
								switch(ontology_set){
									case "data":
										readingData = true;
										break;
									
									case "operation":
										readingOperation = true;
										break;
										
									case "topic":
										readingTopic = true;
										break;
									
									case "format":
										readingFormat = true;
										break;
										
									default:
									
										if(line !== "!id: ObsoleteClass"){
									
                                                                                    console.error("ONTOLOGY ERROR:\n"+
                                                                                                  "Unidentified Ontology Set at line "+i);
													  
										}
										break;
									
								}
							}
						}
						
						else if(line.indexOf("name:") !== -1){
							
							name = line.split("name: ")[1];

						}
							
						else if(line.indexOf("is_a") !== -1){
							
							var parentNumber = line.split("is_a: ")[1].split("!")[0].split(":")[1];
							
							is_a.push(parseInt(parentNumber,10));
						}
							
						else if(line.indexOf("has_topic") !== -1){
							
							var topicID = line.split("has_topic ")[1].split("!")[0].split(":")[1];
							
							has_topic.push(parseInt(topicID,10));
						}
						
						else if(line.indexOf("has_input") !== -1){
							
							var dataID = line.split("has_input ")[1].split("!")[0].split(":")[1];
							
							has_inputs.push(parseInt(dataID,10));
							
						}
						
						else if(line.indexOf("has_output") !== -1){
							
							
							var dataID = line.split("has_output ")[1].split("!")[0].split(":")[1];
							
							has_outputs.push(parseInt(dataID,10));
							
							
						}
						
						else if(line.indexOf("is_format_of") !== -1){
							
							var dataID = line.split("is_format_of ")[1].split("!")[0].split(":")[1];
							
							is_format_of.push(parseInt(dataID,10));
						}

						else if(line.indexOf("is_identifier_of") !== -1){
							
							var dataID = line.split("is_identifier_of ")[1].split("!")[0].split(":")[1];
							
							is_identifier_of.push(parseInt(dataID,10));
						}					
						
						
						//Reading the final space
						else if(line.length<3){
							
							if(readingData===true){
								
								var myData = new Data(number,name,is_a,has_topic,is_identifier_of);
								this.datas.push(myData);
							}
							else if(readingOperation===true){
								
								var myOperation = new OperationOntology(number,name,is_a,has_topic,has_inputs, has_outputs);
								this.operations.push(myOperation);
								
							}
							else if(readingTopic===true){
							
								var myTopic = new Topic(number,name,is_a);
								this.topics.push(myTopic);
								
							}
							else if(readingFormat===true){
								
								var myFormat = new Format(number,name,is_a,is_format_of);
								this.formats.push(myFormat);
								
							}
							else{
								//In this case we have either data
								//not relevant for this program or
								//an actual error; Lets ignore it
								//for now until we parse the rest
								//of the data
							}
							
							
							//Return to starting state
							readingTerm = false;
							readingData = false;
							readingOperation = false;
							readingTopic = false;
							readingIdentifier = false;
							readingFormat = false;
							idRead = false;
							id = "";
							ontology_set = "";
							number = "";
							name = "";
							is_a = [];
							has_topic = [];
							has_inputs = [];
							has_outputs = [];
							is_format_of = [];
							is_identifier_of = [];
							
						}
						
						//Default state
						/*
						else{
							
							console.error("ONTOLOGY ERROR:\n"+
										  "I have no idea of what going on around line "+i);
						}
						*/
						
					}
					//If we are not reading a term
					else{
						//Then is either the intro or the typedef
						//for the relationship. This data is out
						//of the scope of this program for now.
						
					}
					
				}
			
		
			}
		}
		
		/*NOTE!*/
		/*
		 * We need to take out the first ID because is
		 * a Obsolet Term weird node. The reason of why
		 * I don't skip it in the automata is because
		 * I would need to double the number of conditional
		 * for only this element alone; so I take it out
		 * manually here.
		 * 
		 * Unless you took it from the file first!
		 * I'm still need to think which solution is better.
		 * I have taken it from the file
		 * 
		 * Also I need to check for other versions of the OBO file
		 * in the case the user want to upload his own version.
		 * For now there is only the v1.2 file embeded in the program
		 * without the first Obsolete Term.
		 * 
		 * */
		
		//Until here we have construct the objectes as
		/*
		 * ID
		 * id = 3029
		 * Name = My name
		 * has_this_IDs = 4543,2325,35,...
		 * 
		 */
		//Now I'm going to change the IDs numbers in the arrays
		//for real references to the objects.
		//You can still stop here and use the alternative if
		//you set this conditional to false
		if(true){
			
			var length = 0;
			
			//For each data
			for(var i=0; i<this.datas.length; i++){
					
				var myData = this.getNodeByID(this.datas[i].id,"data"); //Change this for data[i] when everything fixed

				//Fix specializations
				length = myData.is_a.length;
				for(var j=0; j<length; j++){
				
					if(this.getNodeByID(myData.is_a[j],"data")!==null){
						myData.is_a.push(this.getNodeByID(myData.is_a[j],"data"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Data "+myData.id+"\n"+
									"is a specialization of Data "+myData.is_a[j]+"\n"+
									"which doesn't exist");
					}
				}

				//Fix topics
				length = myData.has_topic.length;
				for(var j=0; j<length; j++){
				
					if(this.getNodeByID(myData.has_topic[j],"topic")!==null){
						myData.has_topic.push(this.getNodeByID(myData.has_topic[j],"topic"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Data "+myData.id+"\n"+
									"has the topic of Topic "+myData.has_topic[j]+"\n"+
									"which doesn't exist");
					}
				}
			
				//Fix identifiers
				length = myData.is_identifier_of.length;
				for(var j=0; j<length; j++){
				
					if(this.getNodeByID(myData.is_identifier_of[j],"data")!==null){
						myData.is_identifier_of.push(this.getNodeByID(myData.is_identifier_of[j],"data"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Data "+myData.id+"\n"+
									"is a identifier of Data "+myData.is_identifier_of[j]+"\n"+
									"which doesn't exist");
					}
				}
			}
		
			//For each format
			for(var i=0; i<this.formats.length; i++){
		
				var myFormat = this.getNodeByID(this.formats[i].id,"format");
			
				//Fix specializations
				length = myFormat.is_a.length;
				for(var j=0; j<length; j++){
				
					if(this.getNodeByID(myFormat.is_a[j],"format")!==null){
						myFormat.is_a.push(this.getNodeByID(myFormat.is_a[j],"format"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Format "+myFormat.id+"\n"+
									 "is a specialization of Format "+myFormat.is_a[j]+"\n"+
									 "which doesn't exist");
					}
				}
			
				//Fix datas which use these format
				length = myFormat.is_format_of.length;
				for(var j=0; j<length; j++){
					
					if(this.getNodeByID(myFormat.is_format_of[j],"data")!==null){
						myFormat.is_format_of.push(this.getNodeByID(myFormat.is_format_of[j],"data"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Format "+myFormat.id+"\n"+
									 "is a format for Data "+myFormat.is_format_of[j]+"\n"+
									 "which doesn't exist");
					}
				}
			
			}
		
			
			//For each operation
			for(var i=0; i<this.operations.length; i++){
		
				var myOperation = this.getNodeByID(this.operations[i].id,"operation");
			
				//Fix specializations
				length = myOperation.is_a.length;
				for(var j=0; j<length; j++){
					
					if(this.getNodeByID(myOperation.is_a[j],"operation")!==null){
						myOperation.is_a.push(this.getNodeByID(myOperation.is_a[j],"operation"));
						
					}
					else{
						console.warn("ONTOLOGY WARNING: Operation "+myOperation.id+"\n"+
									 "is a specialization of Operation "+myOperation.is_a[j]+"\n"+
									 "which doesn't exist");
					}
				}
						
				//Fix topics
				length = myOperation.has_topic.length;
				for(var j=0; j<length; j++){
					
					if(this.getNodeByID(myOperation.has_topic[j],"topic")!==null){
						myOperation.has_topic.push(this.getNodeByID(myOperation.has_topic[j],"topic"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Operation "+myOperation.id+"\n"+
									 "has the topic of Topic "+myOperation.has_topic[j]+"\n"+
									 "which doesn't exist");
					}
				}
			
				//Fix inputs
				length = myOperation.has_inputs.length;
				for(var j=0; j<length; j++){
					
					if(this.getNodeByID(myOperation.has_inputs[j],"data")!==null){
						myOperation.has_inputs.push(this.getNodeByID(myOperation.has_inputs[j],"data"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Operation "+myOperation.id+"\n"+
									 "has as input Data "+myOperation.has_inputs[j]+"\n"+
									 "which doesn't exist");
					}
				}
			
				//Fix outputs
				length = myOperation.has_outputs.length;
					for(var j=0; j<length; j++){
					
						if(this.getNodeByID(myOperation.has_outputs[j],"data")!==null){
							myOperation.has_outputs.push(this.getNodeByID(myOperation.has_outputs[j],"data"));
						}
						else{
							console.warn("ONTOLOGY WARNING: Operation "+myOperation.id+"\n"+
										"has as input Data "+myOperation.has_outputs[j]+"\n"+
										"which doesn't exist");
						}
					}

			}


			//For each topic
			for(var i=0; i<this.topics.length; i++){
			
				//Show the topic info
				var myTopic = this.getNodeByID(this.topics[i].id,"topic");
				
				//Fix specializations
				length = myTopic.is_a.length;
				for(var j=0; j<length; j++){
				
					if(this.getNodeByID(myTopic.is_a[j],"topic")!==null){
						myTopic.is_a.push(this.getNodeByID(myTopic.is_a[j],"topic"));
					}
					else{
						console.warn("ONTOLOGY WARNING: Topic "+myTopic.id+"\n"+
									 "is a specialization of Topic "+myTopic.is_a[j]+"\n"+
									 "which doesn't exist");
					}
			}
		}	
			
			//Finally; it each array we have the ID number and later on
			//the object. We need to cut in a half each array and keep
			//the part with the references.
			
			//We should always have an even number of elements 
			
			//For data arrays
			for(var i=0; i<this.datas.length; i++){
				
				this.datas[i].is_a.splice(0,this.datas[i].is_a.length/2);
				this.datas[i].has_topic.splice(0,this.datas[i].has_topic.length/2);
				this.datas[i].is_identifier_of.splice(0,this.datas[i].is_identifier_of.length/2);
			}

			//For format arrays
			for(var i=0; i<this.formats.length; i++){
				
				this.formats[i].is_a.splice(0,this.formats[i].is_a.length/2);
				this.formats[i].is_format_of.splice(0,this.formats[i].is_format_of.length/2);	
			}
			
			//For operation arrays			
			for(var i=0; i<this.operations.length; i++){
				
				this.operations[i].is_a.splice(0,this.operations[i].is_a.length/2);
				this.operations[i].has_topic.splice(0,this.operations[i].has_topic.length/2);
				this.operations[i].has_inputs.splice(0,this.operations[i].has_inputs.length/2);
				this.operations[i].has_outputs.splice(0,this.operations[i].has_outputs.length/2);
			}			
			
			//For topic arrays
			for(var i=0; i<this.topics.length; i++){
				
				this.topics[i].is_a.splice(0,this.topics[i].is_a.length/2);				
			}

			//Until here we have an acyclic graph. But each node only points
			//in one direction; so we cannot go back in the graph without starting
			//over again.
			
			//What comes here now is initializing the arrays of those backwards
			//references. If, for example, a DATA is a specialization of X, now X
			//will also have a pointer to DATA and other datas with all its
			//specializations.
			
			//I don't check for errors no more because if there was a node
			//that doesn't exist I would have catch it by now.
			
			//For every data in the ontology
			for(var i=0; i<this.datas.length; i++){
			
				var myData = this.datas[i];
				
				//Set up generalizations and my identifiers
				//For every data in the ontology
				for(var j=0; j<this.datas.length; j++){
				
					var myCandidate = this.datas[j];
					
					//Look inside its specialization list
					for(k=0; k<myCandidate.is_a.length; k++){
					
							//If it has a specialization which mach my ID
							//I'm a generalization of that data
							if(myCandidate.is_a[k].id === myData.id){
								
								myData.generalizationOf.push(myCandidate);
								
							}
					}
					
					//For every identifier in the candidate
					for(var k=0; k<myCandidate.is_identifier_of.length; k++){
					
						//Check if the candidate is identifier of me
						if(myCandidate.is_identifier_of[k].id === myData.id){	
							myData.haveIdentifiers.push(myCandidate);
						}
						
					}
					
				}
			
				//Set up where I'm input and output
				//For every operation in the ontology
				for(var j=0; j<this.operations.length; j++){
				
					var myCandidate = this.operations[j];
					
					//For every input of that operation
					for(var k=0; k<myCandidate.has_inputs.length; k++){
					
						if(myCandidate.has_inputs[k].id === myData.id){
							myData.isInputIn.push(myCandidate);
						}
					}
					
					//For every output of that operation
					for(var k=0; k<myCandidate.has_outputs.length; k++){
					
						if(myCandidate.has_outputs[k].id === myData.id){
							myData.isOutputIn.push(myCandidate);
						}
					}
						
				}
				
				
				//Set up the formats
				//For every format in the ontology
				for(var j=0; j<this.formats.length; j++){
				
					var myCandidate = this.formats[j];
					
					//For every data this is format of
					for(var k=0; k<myCandidate.is_format_of.length; k++){
					
						//Check if I'm its format
						if(myCandidate.is_format_of[k].id === myData.id){
							myData.hasFormat.push(myCandidate);
						}
						
					}
					
				}
			
			}
			

			//For every topic in the ontology
			for(var i=0; i<this.topics.length; i++){
			
				var myTopic = this.topics[i];
				
                                
                                
                                //Set up the generalizations topics
				//For every data in the ontology
				for(var j=0; j<this.topics.length; j++){
				
					var myCandidate = this.topics[j];
					
					//Look inside its specialization list
					for(k=0; k<myCandidate.is_a.length; k++){
					
						//If it has a specialization which mach my ID
						//I'm a generalization of that data
						if(myCandidate.is_a[k].id === myTopic.id){
								
							myTopic.generalizationOf.push(myCandidate);
								
						}
					}
                                
                                }
                                
				//Set up the data topics
				//For every data in the ontology
				for(var j=0; j<this.datas.length; j++){
				
					var myCandidate = this.datas[j];
					/**
					//Look inside its specialization list
					for(k=0; k<myCandidate.is_a.length; k++){
					
						//If it has a specialization which mach my ID
						//I'm a generalization of that data
						if(myCandidate.is_a[k].id === myTopic.id){
								
							myTopic.generalizationOf.push(myCandidate);
								
						}
					}**/
					
					//Look inside its topic list
					for(k=0; k<myCandidate.has_topic.length; k++){
					
						//If it has topic that match my ID
						//I'm a topic for that data
						if(myCandidate.has_topic[k].id === myTopic.id){

							myTopic.isTopicForDatas.push(myCandidate);
							
						}

					}
					
				}	
			
				
				//Set up the operation topics
				//For every operation in the ontology
				for(var j=0; j<this.operations.length; j++){
				
					var myCandidate = this.operations[j];
			
					//Look inside its topics list
					for(var k=0; k<myCandidate.has_topic.length; k++){
					
						//If the topic of that operation match my ID
						//then I'm topic for that operation
						if(myCandidate.has_topic[k].id === myTopic.id){

							myTopic.isTopicForOperations.push(myCandidate);
							
						}
					
					}
			
				}
			
			}
			
		
			//For every operation in the ontology
			for(var i=0; i<this.operations.length; i++){
			
				var myOperation = this.operations[i];
				
				//Set up generalizations
				//For every operation in the ontology
				for(var j=0; j<this.operations.length; j++){
				
					var myCandidate = this.operations[j];
					
					//Look inside its specialization list
					for(k=0; k<myCandidate.is_a.length; k++){
					
							//If it has a specialization which mach my ID
							//I'm a generalization of that operation
							if(myCandidate.is_a[k].id === myOperation.id){
								
								myOperation.generalizationOf.push(myCandidate);
								
							}
					}
					
				}			
				
			}
		
			//For every format in the ontology
			for(var i=0; i<this.formats.length; i++){

				var myFormat = this.formats[i];
				
				//Set up generalizations
				//For every format in the ontology
				for(var j=0; j<this.formats.length; j++){
				
					var myCandidate = this.formats[j];
					
					//Look inside its specialization list
					for(var k=0; k<myCandidate.is_a.length; k++){
					
							//If it has a specialization which mach my ID
							//I'm a generalization of that format.
							if(myCandidate.is_a[k].id === myFormat.id){
								
								myFormat.generalizationOf.push(myCandidate);
								
							}
					}
					
				}	

				
				
			}
		
		}

	}
	
	//Retrieves a node from the Ontology provided the number ID and the ontology set
	function getNodeByID(id,ontologySet){

            /*
                if(id===4){
                    console.log("ID requested "+id);
                    console.log("SET requested "+ontologySet);
                }
            */
            
                    
                
		var myNode = null;
		
		switch(ontologySet){
		
			case "data":
				for(var i=0; i<this.datas.length; i++){
					
					if(this.datas[i].id===id){
						myNode = this.datas[i];
					}
				
				}
				break;
				
			case "operation":
                            
                                
                            
				for(var i=0; i<this.operations.length; i++){
					
                                        /*
                                        if(id===4 && (i===0 || id===1 || id===2)){
                                            console.log("Found operation!");
                                            console.log("Ontology candidate");
                                            console.log("ID = " + this.operations[i].id);
                                        }
                            */
                                        
                                        
					if(this.operations[i].id===id){
                                            
						myNode = this.operations[i];
					}
				
				}
				break;
				
			case "format":
				for(var i=0; i<this.formats.length; i++){
					
					if(this.formats[i].id===id){
						myNode = this.formats[i];
					}
				
				}
				break;
				
			case "topic":
				for(var i=0; i<this.topics.length; i++){
					
					if(this.topics[i].id===id){
						myNode = this.topics[i];
					}
				
				}
				break;
		
		
			default:
				
				console.error("ONTOLOGY ERROR:\n"+
							  "I have no idea of what going on around line "+i);
				break;
			
		}
		
		return myNode;
	}
	
        //Retrieve the operation ontology graph like this:
        //List of terms:
        // [ ID, [ ... ]] ID and a list of IDs associated to this ID
        // For example for the first levels will be:
        // [ [0004, [ [0224 , [...]], [0226 , [...]], [0337 , [...]], [2420,[...]] , [2423, [...]], [2424 , [...]], ..., [3096 , [...]] ]  ] ]
        //(Do I need this?)

        
        //This function tells the distance from A to B.
        //It will assume that A is a child of B and try to reach it by DIJKSTRA
        //Every vertex has a distance of 1. If can't reach it, it will return -1.
        function distance(ontology, idA, idB){

            //Create some variables for the algorithm
            //EDAM seems to be capped to 9999 elements for ontology so I will use that number
            //Each node is represented by its index in the array

            //Ultimate variable where tells the distance betwen A and B
            var totalDistance = -1;

            //Distance from node ID to idA, set to inf at the beggining; 9999999 means infinity
            var distances = [];

            //This represent if this node has been visited or not
            var visited = [];

            //This is the ID of the node in the optimal path; -1 means undefined
            var previous = [];

            //Initialize everything
            for(var i = 0; i < 9999; i++) {
                distances.push(9999999);
                visited.push(false);
                previous.push(-1);
            }

            //Distance from IDA to IDA = 0
            distances[idA] = 0;

            //Pseudo priority queue (JS doesn't have this defined actually)
            var Q = [];

            //Get A into the queue
            Q.push(this.getNodeByID(idA,ontology));

            //Terminate the search if we find idB
            var targetFound = false;

            while(Q.length>0 && targetFound===false){

                var nodeU = 0;
                var found = false;
                var min = Math.min.apply(Math, distances);
                var index = distances.indexOf(min);

                //Find the smallest distance in distances which has not beeing visited
                while(found === false){

                    //If it is not visited then we are finish
                    if(visited[index] === false){
                        found = true;
                    }
                    else{

                        //If is not; find the next one with the same minimum
                        index = distances.indexOf(min,index+1);


                        //If it doesn't exist, look for another minimum
                        if(index<0){
                            min = minimumBiggerThanThreshold(distances,min);
                            index = distances.indexOf(min);
                        }   
                    }
                }
            
                //console.log("Found at :" + index);

                nodeU = this.getNodeByID(index,ontology);

                if(nodeU.id === idB){
                    targetFound = true;
                }
                else{

                    //Remove U from Q
                    found = false;
                    index = -1;
                    for(var i=0; i<Q.length && found===false; i++){

                        if(Q[i].id === nodeU.id){
                            index = i;
                            found = true;
                        }

                    }
                    Q.splice(index,1);

                    //Mark U as visited
                    visited[nodeU.id] = true;

                    //console.log("--CHECKING FOR-----");
                    //console.log(nodeU.toString());
                    //console.log("-------------------");

                    //For each relationship of is_a of nodeU to everybody else (This relationship only exist in topic, operation, data and formats)
                    for(var i=0; i<nodeU.is_a.length; i++){

                        //Accumulate shortest distance from the source (in this case every vertex is equal 1)
                        var alternative_path = distances[nodeU.id] + 1;
                        
                        //console.log("------");
                        //console.log("TOTAL: "+nodeU.is_a.length);
                        //console.log("THIS:: "+i);
                        //console.log("------");
                        //console.log(nodeU.is_a[i].toString());
                        //console.log("");

                        //If we have a better path
                        if(alternative_path< distances[nodeU.is_a[i].id] && visited[nodeU.is_a[i].id]===false){

                            distances[nodeU.is_a[i].id] = alternative_path; //Keep the shortest distance from U to it neighborg
                            previous[nodeU.is_a[i].id] = nodeU.id; //Label the previous node
                            Q.push(nodeU.is_a[i]); //Add it to the list to be processed

                        }

                    }
                }
            }

            //If we found the target, now transverse back the list of nodes which make the path
            if(targetFound===true){

                totalDistance = 0;
                var previousID = nodeU.id;

                while(previous[previousID]!==-1){

                    previousID = previous[previousID]; //Go backwards until you find the source (which will have no previous)
                    totalDistance += 1; //Add one to the total distance
                }

            }

            return totalDistance;

        }
        
        
        
        
        
        
        //This function tells the distance from A to B.
        //It will try to reach with both specializations and generalizations by DIJKSTRA
        //Every vertex has a distance of 1. If can't reach it, it will return -1. (this shouldn't happen with not obsolete terms)
        function distanceComplete(ontology, idA, idB){

            //Create some variables for the algorithm
            //EDAM seems to be capped to 9999 elements for ontology so I will use that number
            //Each node is represented by its index in the array

            //Ultimate variable where tells the distance betwen A and B
            var totalDistance = -1;

            //Distance from node ID to idA, set to inf at the beggining; 9999999 means infinity
            var distances = [];

            //This represent if this node has been visited or not
            var visited = [];

            //This is the ID of the node in the optimal path; -1 means undefined
            var previous = [];

            //Initialize everything
            for(var i = 0; i < 9999; i++) {
                distances.push(9999999);
                visited.push(false);
                previous.push(-1);
            }

            //Distance from IDA to IDA = 0
            distances[idA] = 0;

            //Pseudo priority queue (JS doesn't have this defined actually)
            var Q = [];

            //Get A into the queue
            Q.push(this.getNodeByID(idA,ontology));

            //Terminate the search if we find idB
            var targetFound = false;

            while(Q.length>0 && targetFound===false){

                var nodeU = 0;
                var found = false;
                var min = Math.min.apply(Math, distances);
                var index = distances.indexOf(min);

                //Find the smallest distance in distances which has not beeing visited
                while(found === false){

                    //If it is not visited then we are finish
                    if(visited[index] === false){
                        found = true;
                    }
                    else{

                        //If is not; find the next one with the same minimum
                        index = distances.indexOf(min,index+1);


                        //If it doesn't exist, look for another minimum
                        if(index<0){
                            min = minimumBiggerThanThreshold(distances,min);
                            index = distances.indexOf(min);
                        }   
                    }
                }
            
                //console.log("Found at :" + index);

                nodeU = this.getNodeByID(index,ontology);

                if(nodeU.id === idB){
                    targetFound = true;
                }
                else{

                    //Remove U from Q
                    found = false;
                    index = -1;
                    for(var i=0; i<Q.length && found===false; i++){

                        if(Q[i].id === nodeU.id){
                            index = i;
                            found = true;
                        }

                    }
                    Q.splice(index,1);

                    //Mark U as visited
                    visited[nodeU.id] = true;

                    //console.log("--CHECKING FOR-----");
                    //console.log(nodeU.toString());
                    //console.log("-------------------");

                    //For each relationship of is_a of nodeU to everybody else (This relationship only exist in topic, operation, data and formats)
                    var listOfNeighbours = [];
                    listOfNeighbours = nodeU.generalizationOf.concat(nodeU.is_a);
                    
                    for(var i=0; i<listOfNeighbours.length; i++){

                        //Accumulate shortest distance from the source (in this case every vertex is equal 1)
                        var alternative_path = distances[nodeU.id] + 1;
                        
                        //console.log("------");
                        //console.log("TOTAL: "+listOfNeighbours.length);
                        //console.log("THIS:: "+i);
                        //console.log("------");
                        //console.log(listOfNeighbours[i].toString());
                        //console.log("------");

                        //If we have a better path
                        if(alternative_path< distances[listOfNeighbours[i].id] && visited[listOfNeighbours[i].id]===false){

                            distances[listOfNeighbours[i].id] = alternative_path; //Keep the shortest distance from U to it neighborg
                            previous[listOfNeighbours[i].id] = nodeU.id; //Label the previous node
                            Q.push(listOfNeighbours[i]); //Add it to the list to be processed

                        }

                    }
                }
            }

            //If we found the target, now transverse back the list of nodes which make the path
            if(targetFound===true){

                totalDistance = 0;
                var previousID = nodeU.id;

                while(previous[previousID]!==-1){

                    previousID = previous[previousID]; //Go backwards until you find the source (which will have no previous)
                    totalDistance += 1; //Add one to the total distance
                }

            }

            return totalDistance;

        }
        
        
}

//This class represent a DATA node
function Data(id,name,is_a_LIST,has_topic_LIST,is_identifier_of_LIST){
	
	this.id = id;
	this.name = name;
	
	//Original ontology setup
	this.is_a = is_a_LIST; //This data is a specialization of any of the DATAs from here
	this.has_topic = has_topic_LIST; //This data has this TOPICs
	this.is_identifier_of = is_identifier_of_LIST; //I'm identifier of this DATAs
	
	//Double linking setup
	this.generalizationOf = []; //This data here has me as their generalization
	this.haveIdentifiers = []; //I have this identifier
	this.isInputIn = []; //Is input in these operations
	this.isOutputIn = []; //Is output in these operations
	this.hasFormat = []; //Has these formats
	
	//Methods
	this.toString = toString;
	
	//Makes a verbose string represantation of the Data Node
	function toString(){
		
		var result = "";
		
		//Show the data info
		result += "-----------------------"+ "\n";
		result += "DATA: "+this.id + "\n";
		result += "Name: "+this.name + "\n";
		result += "-----------------------" + "\n";
			
		//Show generalizations
		result += "Is specialization of: " + "\n";
		for(var j=0; j<this.is_a.length; j++){
				
			result += "    data: "+this.is_a[j].id+" "+this.is_a[j].name +"\n";
				
		}
		result += "-----------------------" + "\n";	
				
		//Show topics
		result += "Has this topics: " + "\n";
		for(var j=0; j<this.has_topic.length; j++){
				
			result += "    topic: "+this.has_topic[j].id+" "+this.has_topic[j].name +"\n";
				
		}
		result += "-----------------------" + "\n";	
			
		//Show data I identify
		result += "Is identifier of: " + "\n";
		for(var j=0; j<this.is_identifier_of.length; j++){
				
			result += "    data: "+this.is_identifier_of[j].id+" "+this.is_identifier_of[j].name +"\n";
				
		}
		result += "-----------------------" + "\n";	
		
		
		//Show specializations
		result += "Is generalization of: " + "\n";
		for(var j=0; j<this.generalizationOf.length; j++){
		
			result += "    data: "+this.generalizationOf[j].id+" "+this.generalizationOf[j].name +"\n";
		
		}
		result += "-----------------------" + "\n";	
		
		
		//Show what identify me
		result += "Is identify by: " + "\n";
		for(var j=0; j<this.haveIdentifiers.length; j++){
		
			result += "    data: "+this.haveIdentifiers[j].id+" "+this.haveIdentifiers[j].name +"\n";
		
		}
		result += "-----------------------" + "\n";

		//Show where I'm input
		result += "Is input in: " + "\n";
		for(var j=0; j<this.isInputIn.length; j++){
		
			result += "    operation: "+this.isInputIn[j].id+" "+this.isInputIn[j].name +"\n";
		
		}
		result += "-----------------------" + "\n";

		//Show where I'm output
		result += "Is output in: " + "\n";
		for(var j=0; j<this.isOutputIn.length; j++){
		
			result += "    operation: "+this.isOutputIn[j].id+" "+this.isOutputIn[j].name +"\n";
		
		}
		result += "-----------------------" + "\n";
		
		
		//Show my formats
		result += "Have formats: " + "\n";
		for(var j=0; j<this.hasFormat.length; j++){
		
			result += "    format: "+this.hasFormat[j].id+" "+this.hasFormat[j].name +"\n";
		
		}
		result += "-----------------------" + "\n";
		
		result += "##############################" + "\n";
		return result;
	}
	
}

//This function represent a TOPIC node{
function Topic(id,name,is_a_LIST){
	
	this.id = id;
	this.name = name;
	
	//Original ontology setup
	this.is_a = is_a_LIST; //This topic is a specialization of any of the TOPICs from here
		
	//Double link setup
	this.generalizationOf = []; //This topic is a generalization for these topics
	this.isTopicForOperations = []; //This topic is topic for these operations
	this.isTopicForDatas = []; //This topic is topic for these datas
	
	//Methods
	this.toString = toString;
	
	//Makes a verbose string representation of the Topic node
	function toString(){

		var result = "";

		//Show the topic info
		result += "-----------------------"+ "\n";
		result += "TOPIC: "+this.id + "\n";
		result += "Name : "+this.name + "\n";
		result += "-----------------------" + "\n";
						
		//Show generalizations
		result += "Is specialization of: " + "\n";
		for(var j=0; j<this.is_a.length; j++){
				
			result += "    topic: "+this.is_a[j].id+" "+this.is_a[j].name +"\n";
				
		}	
		result += "-----------------------" + "\n";	
		
		//Show specializations
		result += "Is generalization of: " + "\n";
		for(var j=0; j<this.generalizationOf.length; j++){
				
			result += "    topic: "+this.generalizationOf[j].id+" "+this.generalizationOf[j].name +"\n";
				
		}	
		result += "-----------------------" + "\n";
		
		//Show operations and datas where I'm topic
		result += "Is topic in: " + "\n";
		for(var j=0; j<this.isTopicForOperations.length; j++){
				
			result += "    operation: "+this.isTopicForOperations[j].id+" "+this.isTopicForOperations[j].name +"\n";
				
		}
		for(var j=0; j<this.isTopicForDatas.length; j++){
				
			result += "    data: "+this.isTopicForDatas[j].id+" "+this.isTopicForDatas[j].name +"\n";
				
		}	
		result += "-----------------------" + "\n";	
		result += "##############################" + "\n";

		return result;
	}
	
	
}

//This function represent a OPERATION node
function OperationOntology(id,name,is_a_LIST,has_topic_LIST,has_inputs_LIST, has_outputs_LIST){
	
	this.id = id;
	this.name = name;
	
	//Original ontology setup
	this.is_a = is_a_LIST; //This operation is a specialization of any of the OPERATIONs from here
	this.has_topic = has_topic_LIST; //This operation has this TOPICs
	this.has_inputs = has_inputs_LIST; //This operation has this DATAs as inputs
	this.has_outputs = has_outputs_LIST; //This operation has this DATAs as outputs
	
	//Double link setup
	this.generalizationOf = [];
	
	//Methods
	this.toString = toString;
	
	//Makes a verbose string representation of the Operation node
	function toString(){

		var result = "";
		
		//Show the data info
		result += "-----------------------" + "\n";
		result += "OPRT: "+this.id   + "\n";
		result += "Name: "+this.name + "\n";
		result += "-----------------------" + "\n";
			
		//Show generalizations
		result += "Is specialization of: " + "\n";
		for(var j=0; j<this.is_a.length; j++){
				
			result += "    operation: "+this.is_a[j].id+" "+this.is_a[j].name + "\n";
				
		}			
		result += "-----------------------" + "\n";	
			
		//Show topics
		result += "Has this topics: " + "\n";
		for(var j=0; j<this.has_topic.length; j++){
			
			result += "    topic: "+this.has_topic[j].id+" "+this.has_topic[j].name + "\n";
				
		}
		result += "-----------------------" + "\n";	
			
		//Show inputs
		result += "Has these inputs: " + "\n";
		for(var j=0; j<this.has_inputs.length; j++){
				
			result += "    --> data: "+this.has_inputs[j].id+" "+this.has_inputs[j].name + "\n";
				
		}
		result += "-----------------------" + "\n";	

		//Show outputs
		result += "Has these outputs: " + "\n";
		for(var j=0; j<this.has_outputs.length; j++){

			result += "    <.. data: "+this.has_outputs[j].id+" "+this.has_outputs[j].name + "\n";
				
		}
		result += "-----------------------" + "\n";			
		
		//Show specializations
		result += "Is generalization of: " + "\n";
		for(var j=0; j<this.generalizationOf.length; j++){
				
			result += "    operation: "+this.generalizationOf[j].id+" "+this.generalizationOf[j].name + "\n";
				
		}			
		result += "-----------------------" + "\n";	
		result += "##############################" + "\n";

		return result;
	}
}

//This function represent a FORMAT node
function Format(id,name,is_a_LIST,is_format_of_LIST){

	this.id = id;
	this.name = name;
	
	//Ontology originals
	this.is_a = is_a_LIST; //This format is a specialization of any of the FORMATs from here
	this.is_format_of = is_format_of_LIST; //The DATAs in here have THIS format

	//Double link setup
	this.generalizationOf = []; //This format is a generalization of any of these Formats

	//Methods
	this.toString = toString;
	

	//Makes a verbose string representation of the Format node
	function toString(){
	
		var result = "";
	
		//Show the data info
		result += "-----------------------"+ "\n";
		result += "FORMAT: "+this.id + "\n";
		result += "Name  : "+this.name + "\n";
		result += "-----------------------" + "\n";
			
		//Show generalizations
		result += "Is specialization of: " + "\n";
		for(var j=0; j<this.is_a.length; j++){
				
			result += "format: "+this.is_a[j].id+" "+this.is_a[j].name +"\n";
		}
		result += "-----------------------" + "\n";	
			
		//Show datas which use these format
		result += "Is format of: " + "\n";
		for(var j=0; j<this.is_format_of.length; j++){
				
			result += "data: "+this.is_format_of[j].id+" "+this.is_format_of[j].name +"\n";
		}	
		result += "-----------------------" + "\n";		
		
		
		//Show specializations
		result += "Is generalization of: " + "\n";
		for(var j=0; j<this.generalizationOf.length; j++){
				
			result += "format: "+this.generalizationOf[j].id+" "+this.generalizationOf[j].name +"\n";
		}
		result += "-----------------------" + "\n";
		result += "##############################" + "\n";	
		
		return result;
	
	}

}

//------------AUXILIAR FUNCTIONS--------------

//This function analyse a string with an ontology link and tells you if it is
//a valid EDAM ontology. Returns null if it is not an EDAM ontology; and a map
//as {ontology,id} otherwise.
function isEDAM(string){
    
    
    
    var toReturn = null;
    
    //If we have something like ...edam.../.../.../data*023
    if(string.indexOf("/") !== -1 && string.indexOf("edam") !== -1){
        
        //Grab the last part
        var pieces = string.split("/");
        var lastPart = pieces[pieces.length - 1];
        
        //Try to break it with an underscore
        if(lastPart.indexOf("_") !== -1){
            
            var edamOntology = lastPart.split("_");
            
            //Check out that the ontology name fits one of the ontologies names
            if(edamOntology.length === 2){
                
                for(var i=0; i<ONTOLOGIES.length && toReturn===null; i++){
                    
                    if(ONTOLOGIES[i]===edamOntology[0]){
                        
                        var ontologyName = ONTOLOGIES[i];
                        var idNumber = parseInt(edamOntology[1],10);
                        
                        toReturn = {ontology: ontologyName, id: idNumber};
                        
                    }
                    
                }
                
            }
            
        }
        
    }
    
    return toReturn;
    
}


//This function receive a list with ontologies and return a list with maps
//which are valid EDAM ontologies. It can return an empty list if none of the
//ontologies where valid. The maps have the format {ontology,id}
function toEDAM(semantic){
    
    var ontologyList = [];
    
    for(var i=0; i<semantic.pairsList.length ; i++){
        
        var candidateItem = isEDAM(semantic.pairsList[i].id);
        
        if(candidateItem!== null){
            ontologyList.push(candidateItem);
        }
    }

    return ontologyList;
    
}

//Find the minimum value in an array which is strict greater than threshold
function minimumBiggerThanThreshold(array,threshold){
    
    var minimum = 999999;
    
    for(var i=0; i<array.length ; i++){
        
        if(array[i]>threshold){

            if(array[i]<minimum){
                minimum = array[i];
            }
            
        }

    }

    return minimum;

}




}


//___________________________________________
//           GRAPHICS STUFF
//___________________________________________
{
//------------AUXILIAR FUNCTIONS--------------

//This function transform a RGB into Hexadecimal
//(Is used when calculating the names of the groups)
function RGBtoHex(r,g,b){

	var hexResult = "";

	var hexR = r.toString(16);
	var hexG = g.toString(16);
	var hexB = b.toString(16);

	hexResult = '#'+hexR + hexG + hexB;
	
	return hexResult;
		
}

//This function transsform a HUE angle, in degrees, into RGB.
//I made a function in parts because I can't get to understand
//the chromaticity in whatever color space.
function hueToRGB(angle){

	var r = 0;
	var g = 0;
	var b = 0;
	angle = angle%360;
	
	if(0<=angle && angle<=120){
		r=100;
		g= angle*10/12;
		
	}
	else if(120<angle && angle<=180){
		r= 100 - (angle-120) * 10/6;
		g= 100 - (angle-120) * 2/6;
	}
	else if(180<angle && angle<=210){
		g = 80 - (angle-180) * 2/3;
		b = 60 * (angle-180)/30; 
		
	}
	else if(210<angle && angle<=255){
			
		r = (1 - (255 - angle)/45)*10;
		g = 60 - (1 - (255 - angle)/45)*50;
		b = r+60;
		
	}
	else if(255<angle && angle<=315){
	
		r = 10 + (1 - (315 - angle)/60)*55;
		g = 15 - (1 - (315 - angle)/60)*15;
		b = 70 - (1 - (315 - angle)/60)*15;
	
	}
	else if(315<angle && angle<360){
				
		r= 100 -  (360 - angle)/45  * 35;
		b=  ((360 - angle)/45) * 65;
		
	}
	
	r = Math.floor(r/100 * 255);
	g = Math.floor(g/100 * 255);
	b = Math.floor(b/100 * 255);
	
	return{R:r,G:g,B:b};
	
}

//This function tells you if points (Ax,Ay) and (Bx,By) are in different sides
//of the segment [(Tx,Ty), (Rx,Ry)]
function differentSides(Ax,Ay,Bx,By,Tx,Ty,Rx,Ry){
	
	var detA = (Rx-Tx)*(Ay-Ry)-(Ry-Ty)*(Ax-Rx);
	var detB = (Rx-Tx)*(By-Ry)-(Ry-Ty)*(Bx-Rx);
	
	var sameSide = false;
	if(detA * detB < 0){
		sameSide = true;
	}
	
	return sameSide;
}

//This functions tells you if the segments [(Ax,Ay)(Bx,By)][(Cx,Cy),(Dx,Dy)] intersec
//(note that segments in 'T' shapes will return false)
function segmentsIntersec(Ax,Ay,Bx,By,Cx,Cy,Dx,Dy){
	
	var AB_different_sides_SCD = differentSides(Ax,Ay,Bx,By,Cx,Cy,Dx,Dy); 
	var CD_different_sides_SAB = differentSides(Cx,Cy,Dx,Dy,Ax,Ay,Bx,By);
	
	return (AB_different_sides_SCD && CD_different_sides_SAB);
	
}

//This function return an appropiate font size for a given text
//that goes inside a box with the given dimensions.
function addjustFontSize(boxWidth, boxHeight, text){
	
		//---- Keeping the font size proportional is a bit tricky
		//---- The pixel size of the font doesn't correlate with the pixel size of a canvas
		//---- even if you use a Monospace font.
		//---- So this first part is a bit messy and doesn't seems to have too much logic
		//---- and the constants here are adjusted manually based on my empirical test,
		//---- but it does work.
                
                /**
                var fontSize = 0;
                

                
                //The font size is bigger as the box is wider
                var baseFontSize = boxWidth/(text.length+1) * 5;
                
                //The font is smaller depending of the proportion of the height respest the width
                var fontSize = 0;
                
                
                //Either the box is Taller
                if(boxHeight>boxWidth){
                
                    fontSize = baseFontSize * (boxWidth/boxHeight);
        
                }
                //Or is larger
                else{
                    
                    fontSize = baseFontSize * (boxHeight/boxWidth);
                    
                }
                
                
                
                return fontSize;
                **/
                
                
                
		var fontSize = 0;
		var titleFontProportion = 2;
		var minimumRelative = 0;
		if(boxHeight<boxWidth){
			minimumRelative = boxHeight;
			
		}
		else{
			minimumRelative = boxWidth;
			titleFontProportion = 1;
		}
		
		fontSize = minimumRelative/titleFontProportion;
		var titleTextSizeX = 1.1 * (String(text).length * fontSize/2);
		var secondProportion = boxWidth/titleTextSizeX;
		
                /**
                var titleTextSizeY = 1.1 * (String(text).length * fontSize/2);
                var thirdProportion = boxHeight/titleTextSizeY;
                **/
               
		if(secondProportion<1){
			fontSize = fontSize*(secondProportion*0.8);
		}	

                /**
                if(text==="Sequence"){
                    console.error("!");
                }
                
                if(String(text).length>12){
                    console.warn(fontSize);
                    fontSize = boxWidth/String(text).length;
                    console.warn(fontSize);
                }
                **/
                //fontSize = fontSize*(1/(Math.floor(String(text).length/12)+1));


                /**
                if(thirdProportion<1){
                        fontSize = fontSize*(thirdProportion*0.8);
                }
                **/
    
                /**
    		if(boxHeight<boxWidth){
                    fontSize = fontSize*1.001;
		}
		else{
                    fontSize = fontSize*(1/String(text).length*4);    
		}
                **/ 
                
                /**
                console.log("---------------");
                console.log(text + "  " + String(text).length);
                console.log("W: " + boxWidth);
                console.log("H: " + boxHeight);
                console.log(fontSize);
                console.log("Total: " + String(text).length * fontSize);
                console.log("---------------");
                **/
                
		return fontSize;
                

                
	
	
}

//Get two list of semantics, A and B
//Return another list with the semantics they have in common
function intersecSemantics(semanticsA, semanticsB){
    
    var common = [];
    
    for(var i=0; i<semanticsA.length; i++){
    
        var found = false;
    
        for(var j=0; j<semanticsB.length && found===false; j++){
            
            /**
            console.log("----- Aid = " + semanticsA[i].id);
            console.log("----- Bid = " + semanticsB[i].id);
            console.log("----- Aon = " + semanticsA[i].ontology);
            console.log("----- Bon = " + semanticsB[i].ontology);
            **/
            
            //If they belong to the same ontology they can be equivalent
            if(semanticsA[i].ontology === semanticsB[j].ontology){
                
                //If they have the same ID, they are actually the same
                if(semanticsA[i].id === semanticsB[j].id){

                    //console.log("Found!");
                    common.push(semanticsA[i]);
                    found = true;
                    //console.log("Common now is: "+ common);

                }
                //If they are not the same; A can still be a specialization of B
                //That counts as equivalent according to our definition.
                else{
                    
                    if(The_Ontology.distance(semanticsA[i].ontology,semanticsA[i].id,semanticsB[j].id)>0){
                        common.push(semanticsA[i]);
                        found = true;
                    }
                }
            }
        }
    }

    //console.log("Returning Common: "+ common);
    
    return common;
}

//Get two list of semantics, A and B
//Return:
//0 - A∩B = A
//1 - A∩B ⊂ A
//2 - A∩B = Ø
function subSetSemantics(semanticsA, semanticsB){
    
    var result = -1;
    
    var common = intersecSemantics(semanticsA, semanticsB);
    //console.log("C in ssSS: " + common.length);
    //console.log("SA in ssSS: " + semanticsA.length);
    
    if(common.length === semanticsA.length && common.length > 0){
        result = 0;
    }
    else if(0 < common.length && common.length < semanticsA.length){
        result = 1;
    }
    else if(common.length === 0){
        result = 2;
    }
    else{
        console.error("Intersection of semantics gives less than an empty set!");
    }
    
    return result; 
    
}

//This function reads two boxes and which compatibility status they have
//if you were to link them.
//Returns
//0 - Green - DTA = DTB and OijkOUTA Σ(data) ≠ Ø and OxyzINBΣ(data) ≠ Ø. OijkOUTA Σ(data)∩ OxyzINBΣ(data) = OijkOUTA Σ(data)
//1 - Blue -
//2 - Yellow -
//3 - Red - 
function getCompatible(boxA, boxB){

	//var random = Math.floor(Math.random() * 4);
	//return random;
	
        var result = 0;
        
        var boxASemantics = boxA.getOntologies();
        var boxBSemantics = boxB.getOntologies();
        
        var totalASemantics = boxASemantics[0].length + boxASemantics[1].length;
        var totalBSemantics = boxBSemantics[0].length + boxBSemantics[1].length;
        
        var semanticsA = boxASemantics[0].concat(boxASemantics[1]);
        var semanticsB = boxBSemantics[0].concat(boxBSemantics[1]);
        
        var typeAType = boxA.type;
        var typeBType = boxB.type;
        
        var typeASchema = "";
        var typeBSchema = "";

    
        if(typeAType.indexOf(":")>-1){
            //console.log("Schema detected: "+typeAType.split(":")[0]);
            typeASchema = getWSDLByName(boxA.parent.origin).getSchema(typeAType.split(":")[0]);
            typeAType = typeAType.split(":")[1];
            //console.log("Looking in: "+boxA.parent.origin);
            //console.log("Found: "+typeASchema);
        }
        
        if(typeBType.indexOf(":")>-1){
            //console.log("Schema detected: "+typeBType.split(":")[0]);
            typeBSchema = getWSDLByName(boxB.parent.origin).getSchema(typeBType.split(":")[0]);
            typeBType = typeBType.split(":")[1];
            //console.log("Looking in: "+boxA.parent.origin);
            //console.log("Found: "+typeASchema);
        }
    
        console.log("Box A: "+typeAType+" from "+boxA.parent.title);
        console.log("Box B: "+typeBType+" from "+boxB.parent.title);
        console.log("Box A Schema: "+typeASchema);
        console.log("Box B Schema: "+typeBSchema);
    
    

        /**
        console.log("-Trying " + boxA.type + " width "+ boxB.type);
        console.log("bAS: " + boxASemantics);
        console.log("bBS: " + boxBSemantics);
        console.log("tAS: " + totalASemantics);
        console.log("tBS: " + totalBSemantics);
        console.log("sA : " + semanticsA);
        console.log("sB : " + semanticsB);
        **/
    
        //var intesection = intersecSemantics(semanticsA, semanticsB);
        var subSet = subSetSemantics(semanticsA, semanticsB);
        
        //var sameDataType = (boxA.type === boxB.type);
        
        

        //Check if the schemas are the same
        var sameDataType = false;
        if(typeASchema === typeBSchema){
            
            //If they have the same datatype
            if(typeAType === typeBType){
                
                sameDataType = true;
                
            }
            
        }

        

        //console.log("ssAB: " + subSet);
        //console.log("type?: " + sameDataType);
        
        //They have the same data types
        if(sameDataType){
            //Both have semantic anotattions
            if(totalASemantics !== 0 && totalBSemantics !==0){
                //They are the same
                if(subSet === 0){
                    result = 0;        
                }
                //Some match
                else if(subSet === 1){
                    result = 1;
                }
                //Don't match at all
                else{
                    result = 3;
                }
            }
            //At least one doesn't have semantic anotattions
            else{
                result = 2;
            }
        
        }
        //They are different data types
        else{
            
            //Both have semantic anotattions
            if(totalASemantics !== 0 && totalBSemantics !==0){
               
                //They are the same
                if(subSet === 0){
                    result = 1;        
                }
                else if(subSet === 1){
                    result = 1;
                }
                //Don't match at all
                else{
                    result = 3;
                }      
            
            }
            //At least one doesn't have semantic anotattions
            else{
                result = 3;
            }        
            
        }
        
        return result;
        
}


//This function reads two pieces and which compatibility status they have
//if you were to link them.
//Returns
//0 - Green - 
//1 - Blue -
//2 - Yellow -
//3 - Red - 
function getOperationCompatible(pieceOUT, pieceIN){

	//var random = Math.floor(Math.random() * 4);
        
        var result = 0;
        
        var pieceOUTSemantics = pieceOUT.getOntologies();
        var pieceINSemantics = pieceIN.getOntologies();
        
        //Of all possible semantics (only operation and topic actually)
        //purge those which are not operations. We only care about those
        //in order to check for semantic correlation
        //(Wait; we just care about the data input and output semantics)
        
        
        var totalOUTSemantics = pieceOUTSemantics[2].length;
        var totalINSemantics = pieceINSemantics[1].length;
        
        var semanticsOUT = pieceOUTSemantics[2];
        var semanticsIN = pieceINSemantics[1];

        /**
        console.log("-Trying " + boxA.type + " width "+ boxB.type);
        console.log("bAS: " + boxASemantics);
        console.log("bBS: " + boxBSemantics);
        console.log("tAS: " + totalASemantics);
        console.log("tBS: " + totalBSemantics);
        console.log("sA : " + semanticsA);
        console.log("sB : " + semanticsB);
        **/
    
        //var intesection = intersecSemantics(semanticsA, semanticsB);
        var subSet = subSetSemantics(semanticsOUT, semanticsIN);
        
        
        

        //console.log("ssAB: " + subSet);
        //console.log("type?: " + sameDataType);
        
        
        //Both have semantic anotattions
        if(totalOUTSemantics !== 0 && totalINSemantics !==0){
            //They are the same
            if(subSet === 0){
                result = 0;        
            }
            //Some match
            else if(subSet === 1){
                result = 1;
            }
            //Don't match at all
            else{
                result = 3;
            }
        }
        //At least one doesn't have semantic anotattions
        else{
            result = 2;
        }
        
        return result;    
    
        
	//return random;
}

//------------CLASES--------------------------



//A link is a connection between an output and an input.
function OperationLink(id, outputPiece, inputPiece, fill){
	
	this.id = id;
	this.outputPiece = outputPiece;
	this.inputPiece = inputPiece;
	
	this.outputXTop = 0;
	this.outputYTop = 0;
	this.inputXTop = 0;
	this.inputYTop = 0;
	this.outputXBotom = 0;
	this.outputYBotom = 0;
	this.inputXBotom = 0;
	this.inputYBotom = 0;
	
	this.fill = fill;
	
	//Methods
	this.draw = draw;
        this.toString = toString;
        
        
        function toString(){
            
            var toReturn = "";
            
            toReturn += "OperationLink: -----------\n";
            toReturn += "ID: " + this.id + "\n";
            toReturn += "Coming From: "+ this.outputPiece.id + " - " + this.outputPiece.title  + "\n";
            toReturn += "Going To: "+ this.inputPiece.id + " - " + this.inputPiece.title  + "\n";
            toReturn += "--------------------------\n";
            
            return toReturn;
            
        }
        
	//this.middleSegment = middleSegment;
	
	//Return a segment from the middle
	//left point to the middle right point
        /**
	function middleSegment(){
		var LeftX = this.outputXTop;
		var LeftY = this.outputYTop + (this.outputYBotom - this.outputYTop)/2;
		var RightX = this.inputXBotom;
		var RightY = this.inputYTop + (this.inputYBotom - this.inputYTop)/2;

		return {AX: LeftX, AY: LeftY, BX: RightX, BY: RightY};
	}
        **/
	
	
        /**
         * Draw the link in the context
         * 
         * @param {CanvasRenderingContext2D} context
         */
	function draw(context){
	
            if(this.outputPiece.workflowView===false){
        
		this.outputXTop = this.outputPiece.x + this.outputPiece.width;
		this.outputYTop = this.outputPiece.y + this.outputPiece.frameHeight;
		this.inputXTop =  this.inputPiece.x;
		this.inputYTop =  this.inputPiece.y + this.inputPiece.frameHeight;
		this.outputXBotom = this.outputPiece.x + this.outputPiece.width;
		this.outputYBotom = this.outputPiece.y + this.outputPiece.frameHeight + this.outputPiece.titleHeight; 
		this.inputXBotom = this.inputPiece.x;
		this.inputYBotom = this.inputPiece.y + this.inputPiece.frameHeight + this.inputPiece.titleHeight;
		
		context.fillStyle = this.fill;
		context.beginPath();
		context.moveTo(this.outputXTop, this.outputYTop);
		context.lineTo(this.inputXTop, this.inputYTop);
		context.lineTo(this.inputXBotom, this.inputYBotom);
		context.lineTo(this.outputXBotom, this.outputYBotom);
		context.closePath();
		context.fill();
            }
        
            else{
                
		this.outputXTop = this.outputPiece.x + this.outputPiece.width;
		this.outputYTop = this.outputPiece.y;
		this.inputXTop =  this.inputPiece.x;
		this.inputYTop =  this.inputPiece.y;
		this.outputXBotom = this.outputPiece.x + this.outputPiece.width;
		this.outputYBotom = this.outputPiece.y + this.outputPiece.frameHeight + this.outputPiece.titleHeight + this.outputPiece.bodyHeight + this.outputPiece.footerHeight; 
		this.inputXBotom = this.inputPiece.x;
		this.inputYBotom = this.inputPiece.y + this.inputPiece.frameHeight + this.inputPiece.titleHeight + this.inputPiece.bodyHeight + this.inputPiece.footerHeight; 
                
		context.fillStyle = "black";
		context.beginPath();
		context.moveTo(this.outputXTop, this.outputYTop);
		context.lineTo(this.inputXTop, this.inputYTop);
		context.lineTo(this.inputXBotom, this.inputYBotom);
		context.lineTo(this.outputXBotom, this.outputYBotom);
		context.closePath();
		context.fill();                
                
            }
                
	} 
	
}

//A link is a connection between an output and an input.
function Link(id, outputBox, inputBox, fill){
	
	this.id = id;
	this.outputBox = outputBox;
	this.inputBox = inputBox;
	
	this.outputXTop = 0;
	this.outputYTop = 0;
	this.inputXTop = 0;
	this.inputYTop = 0;
	this.outputXBotom = 0;
	this.outputYBotom = 0;
	this.inputXBotom = 0;
	this.inputYBotom = 0;
	
	this.fill = fill;
	
	//Methods
	this.draw = draw;
	this.middleSegment = middleSegment;
	
	//Return a segment from the middle
	//left point to the middle right point
	function middleSegment(){
		var LeftX = this.outputXTop;
		var LeftY = this.outputYTop + (this.outputYBotom - this.outputYTop)/2;
		var RightX = this.inputXBotom;
		var RightY = this.inputYTop + (this.inputYBotom - this.inputYTop)/2;

		return {AX: LeftX, AY: LeftY, BX: RightX, BY: RightY};
	}
	
	//Draw the link in the context
	function draw(context){
	
		this.outputXTop = this.outputBox.elementTopRightX;
		this.outputYTop = this.outputBox.elementTopRightY;
		this.inputXTop = this.inputBox.elementTopLeftX;
		this.inputYTop = this.inputBox.elementTopLeftY;
		this.outputXBotom = this.outputBox.elementTopRightX;
		this.outputYBotom = this.outputBox.elementTopRightY + this.outputBox.height;
		this.inputXBotom = this.inputBox.elementTopLeftX;
		this.inputYBotom = this.inputBox.elementTopLeftY + this.inputBox.height;
		
		context.fillStyle = this.fill;
		context.beginPath();
		context.moveTo(this.outputXTop, this.outputYTop);
		context.lineTo(this.inputXTop, this.inputYTop);
		context.lineTo(this.inputXBotom, this.inputYBotom);
		context.lineTo(this.outputXBotom, this.outputYBotom);
		context.closePath();
		context.fill();
	
	} 
	
}

//This is a simple square object with no WSDL information (use in handlers for example)
function Box(x, y, width, height, fill) {

	this.x = x||0;
	this.y = y||0;
	this.width = width||1;
	this.height = height||1;
	this.fill = fill||"black";
  
	//Methods
	this.draw = draw;
	this.contains = contains;
	this.closeClick = closeClick;
	this.collapseClick = collapseClick;
	this.inOutConnection = garbage;
	this.inInConnection = garbage;
	this.getInputBoxes = garbage;
	this.deleteLinks = garbage;
	this.validate = garbage;
	this.turnOnSelect = garbage;
	this.turnOffSelect = garbage;
	this.colorBoxClick = garbage;
	
	//This return false function are just for testing; ignore
	function garbage(){
		return false;
	}
	function turnOffSelect(){
		return false;
	}
	function turnOnSelect(){
		return false;
	}
	function validate(){
		return false;
	}
	function deleteLinks(){
		return false;
	}
	function collapseClick(){
		return false;
	}
	function closeClick(){
		return false;
	}
	function inOutConnection(){
		return null;
	}
	function inInConnection(){
		return null;
	}
  
	//Draws this shape to a given context
	function draw(context){
		context.fillStyle = this.fill;
		context.fillRect(this.x, this.y, this.width, this.height);  
	}
			
	// Determine if a point is inside the box's bounds
	function contains(X, Y) {
	  return  (this.x <= X) && (X <= this.x + this.width) &&
			  (this.y <= Y) && (Y <= this.y + this.height);
	}
	
}

//Box with an element and a type
function ConectionBox(x, y, width, height, type, direction, title, parent, elementType) {

	//Constructor
	this.x = x||0;
	this.y = y||0;
	this.width = width||1;
	this.height = height||1; //This height make reference to the box heigh (FIXED)
	this.type = type||"string";
	this.direction = direction||"input";
	this.title = title||"Unknown";
	this.elementType = elementType||"simple";
	this.parent = parent; //Pointer to whom is your Piece parent.
        this.class = "ConectionBox";
	
	this.links = []; //Collection of links that comes out or comes in from here
	this.subBoxes = []; //Here is where the elements are store
	                    //For example a simpleType will not use this
	                    //A complex tipes will have the sequences and the
	                    //attributes? dumped in here.
	                    //A choiceType will have the possible choices in here
	                    //and so on...
	
	
	this.dataOntologies = [];
        this.typeOntologies = [];
	
        this.semanticBoxes = [];
        
        this.elementTopLeftX = 0;
        this.elementTopLeftY = 0;
        this.elementTopMiddleX = 0;
        this.elementTopMiddleY = 0;
        this.elementTopRightX = 0;
        this.elementTopRightY = 0;
        this.elementBotomMiddleX = 0;
        this.elementBotomMiddleY = 0;
        
        this.semanticsTopLeftX = 0;
        this.semanticsTopLeftY = 0;
        this.semanticsWidth = 0;
        this.semanticsHeight = 0;
        
        this.subBoxesTopLeftX = 0;
        this.subBoxesTopLeftY = 0;
        this.subBoxesWidth = 0;
        this.subBoxesHeight = 0;
        
        
        
	this.titleColor = 'rgb(0,0,0)';
	this.elementTypeColor = 'rgb(0,0,0)';
	this.titleFontSize = 0;
	this.typeFontSize = 0;
	this.totalHeight = this.height; //This height make reference to the total
					//height including subboxes' totalHeight
                                        //and semantics if they are open
                                        

                                        
                             
	
	//Options
	this.font = "Courier";
	this.fontColor = "white";
	this.borderColor = "black";
	this.borderWidth = 2;
	
	//Flags
	this.conectorInvisible = true;
	this.selected = false;
	this.linked = false;
	this.subBoxOpen = true;
	this.canOpen = false;
	this.canClose = false;
	this.checkingLink = false;
	this.candidateCompatible = -1;
        this.choosenElement = 0; //This keep track of which element you have choose from the subBoxes IF you are a choiceElement Box
        this.togglerSemantics = false;
  
	//Methods
	this.draw = draw;
	this.contains = contains;
	this.turnOnSelect = turnOnSelect;
	this.turnOffSelect = turnOffSelect;
	this.turnOnLink = turnOnLink;
	this.turnOffLink = turnOffLink;
	this.addLink = addLink;
	this.deleteLink = deleteLink;
	this.validate = validate;
	this.addSubBox = addSubBox;
	this.totalOpen = totalOpen;
	this.clickedBox = clickedBox;
	this.getBoxes = getBoxes;
	this.initFromElementWSDL = initFromElementWSDL;
        this.toString = toString;
        this.toggleSemantic = toggleSemantic;
        this.getOntologies = getOntologies;
        this.totalOntologies = totalOntologies;
        
        //Gives back an integer with how many ontologies I'm going to display
        //plus how many ontologies my subBoxes are going to display
        function totalOntologies(){
            
            var total = 0;
            
            //If I'm displaying anything
            if(this.togglerSemantics===true){
            
            
                if(this.subBoxOpen===true){
                
                    //Count how many my subboxes are displaying
                    for(var i=0; i<this.subBoxes.length; i++){

                        total += this.subBoxes[i].totalOntologies();

                    }
                    
                    
                }
        
                //Add my ontologies
                total += this.dataOntologies.length+this.typeOntologies.length;
        
            }
        
            return total;
            
        }
        
        
        //Gives back the ontologies related to this ConnectionBox
        function getOntologies(){
            
            return [this.dataOntologies,this.typeOntologies];
            
        }
        
        //Toggle the semantic inside this element. Also tells every subBox to toggle it as well.
        function toggleSemantic(){
            
            this.togglerSemantics = !(this.togglerSemantics);
            
            for(var i=0; i<this.subBoxes.length; i++){
                this.subBoxes[i].toggleSemantic();
            }
            
        }
        
        //Gives a representative string with the ConectionBox information
        function toString(){
            
  
            
            var toReturn = "";
            
            toReturn += "X: "+this.x + " Y:"+this.y + "\n";
            toReturn += "W: "+this.width + " H:"+this.height + "\n";
            toReturn += "Element: "+this.title + " Type: "+this.type + "\n";
            toReturn += "Is an "+this.direction+"\n";
            toReturn += "The type of element is: "+this.elementType+"\n";            
            toReturn += "---------" + "\n";
            toReturn += "Has this semantics in ELEMENTS\n";
            for(var i=0; i<this.dataOntologies.length; i++){
                toReturn += "ONT: "+this.dataOntologies[i].ontology + " ID: "+this.dataOntologies[i].id + "\n";    
            }
            toReturn += "Has this semantics in TYPES\n";
            for(var i=0; i<this.typeOntologies.length; i++){
                toReturn += "ONT: "+this.typeOntologies[i].ontology + " ID: "+this.typeOntologies[i].id + "\n";    
            }            
            toReturn += "---------" + "\n";
            
            toReturn += "Total Semantic Boxes: "+ this.semanticBoxes.length + "\n";
            
            toReturn += "---------" + "\n";
            
            toReturn += "eTLX: "+this.elementTopLeftX + "\n";
            toReturn += "eTLY: "+this.elementTopLeftY + "\n";
            toReturn += "eTMX: "+this.elementTopMiddleX + "\n";
            toReturn += "eTMY: "+this.elementTopMiddleY + "\n";
            toReturn += "eTRX: "+this.elementTopRightX + "\n";
            toReturn += "eTRY: "+this.elementTopRightY + "\n";
            toReturn += "eBMX: "+this.elementBotomMiddleX + "\n";
            toReturn += "eBMY: "+this.elementBotomMiddleY + "\n";
        
            toReturn += "sTLX: "+this.semanticsTopLeftX + "\n";
            toReturn += "sTLY: "+this.semanticsTopLeftY + "\n";
            toReturn += "sW: "  +this.semanticsWidth + "\n";
            toReturn += "sH: "+this.semanticsHeight + "\n";
        
            toReturn += "sbTLX: "+this.subBoxesTopLeftX + "\n";
            toReturn += "sBTLY: "+this.subBoxesTopLeftY + "\n";
            toReturn += "sbW: "+this.subBoxesWidth  + "\n";
            toReturn += "sbH: "+this.subBoxesHeight  + "\n";
            
            toReturn += "totalH: "+this.totalHeight  + "\n";
            
            toReturn += "---------" + "\n";
            
            toReturn += "Semantics show?: " + this.togglerSemantics + "\n";
            toReturn += "Linked?: " + this.linked + "\n";
            
            toReturn += "---------" + "\n";
            
            return toReturn;
            
        }
        
        //This function initialize the box from a Element object
        function initFromElementWSDL(element){
            
            //There are 4 possibilities; InLine Element, Simple Element, Complex
            //Element or choice element:
            if(element.class==="inLineElement"){
                
           	this.type = element.type;
                this.title = element.name;
                this.elementType = "inLine";
                this.subBoxes = []; 
                this.dataOntologies = toEDAM(element.semantic);     
                
            }
            else if(element.class==="simpleElement"){
                
                this.type = element.getType();
                this.title = element.name;
                this.elementType = "simple";
                this.subBoxes = [];
                this.dataOntologies = toEDAM(element.semantic);
                this.typeOntologies = toEDAM(element.simpleType.semantic);
                
                //console.log(element.toString());
                
                /**
                 * There are more semantics in the underliying simple type!
                
                    this.enumerationList = enumerationList;
                 * 
                 * */
    
                
            }
            else if(element.class==="complexElement"){
                
                this.type = element.listOfComplexTypes[0].name; //Theoretically a complex element can have several complex types.
                                                                //I haven't found any yet and is hard to imagine how to call that variable type.
                                                                //So I'm going to assume that there is always one complex type for this element
                                                                //and solve this in the future when I come to see a complex element with many
                                                                //complex types.
                this.title = element.name;
                this.elementType = "complex";
                this.dataOntologies = toEDAM(element.semantic);
                this.typeOntologies = toEDAM(element.listOfComplexTypes[0].semantic);
    
                var subElements = element.extractElements();
                for(var i=0; i<subElements.length; i++){
                    
                    var newSubBox = new ConectionBox(0, 0, 1, 1, "simple", this.direction, "new_box", this.parent, "unknown");
                    newSubBox.initFromElementWSDL(subElements[i]);
                    this.subBoxes.push(newSubBox);
                    
                }
                
                
            }
            else if(element.class==="choiceElement"){
                
                this.choosenElement = 0;
                this.elementType = "choice";
                this.title = element.name;
                this.dataOntologies = toEDAM(element.semantic);
                
                for(var i=0; i<element.listOfElements.length; i++){
    
                    var newSubBox = new ConectionBox(0, 0, 1, 1, "simple", this.direction, "new_box", this.parent, "unknown");
                    newSubBox.initFromElementWSDL(element.listOfElements[i]);
                    this.subBoxes.push(newSubBox);
                    
                }
                
            }
            else{
                
                console.error("Box at x: " + this.x + " y: " + this.y + "found\n\
                               an unknown element");
                
            }
        
            //Initialize the Semantic Boxes for this element
            for(var i=0; i<this.dataOntologies.length; i++){
                var title = The_Ontology.getNodeByID(this.dataOntologies[i].id,this.dataOntologies[i].ontology).name;
                var newSemanticBox = new SemanticBox(this.dataOntologies[i].ontology,this.dataOntologies[i].id, title,this, "element");
                this.semanticBoxes.push(newSemanticBox);
            }
            //Initialize the Semantic Boxes for this element
            for(var i=0; i<this.typeOntologies.length; i++){
                var title = The_Ontology.getNodeByID(this.typeOntologies[i].id,this.typeOntologies[i].ontology).name;
                var newSemanticBox = new SemanticBox(this.typeOntologies[i].ontology,this.typeOntologies[i].id, title,this, "type");
                this.semanticBoxes.push(newSemanticBox);
            }
        
        
        }
	
	//Return a reference with all the boxes that compose this box
	//including this box
	function getBoxes(){
		
		var myBoxes = [this];
		var myBoxesList = [];
		
		for(var i=0; i<this.subBoxes.length; i++){
			
			myBoxesList = this.subBoxes[i].getBoxes();
			
			for(var j=0; j<myBoxesList.length; j++){
				myBoxes.push(myBoxesList[j]);	
			}
		}
		
		return myBoxes;
		
	}
	
	
	//Count how many boxes are bellow this box which are open
	//Each box will also count the boxes open bellow it and so on
	function totalOpen(){
		
		var total = 1; //myself
		
		if(this.subBoxOpen===true){
			
			for(var i=0; i<this.subBoxes.length; i++){
				
				total += this.subBoxes[i].totalOpen();
				
			}
			
		}
		
		return total;
		
	}
	
	
	//Add a new subBox to this box
	function addSubBox(newBox){
		this.subBoxes.push(newBox);
		
	}
	
	//Recalculate graphical properties
	function validate(){
		
                //console.log(this.toString());
                
                this.elementTopLeftX = this.x;
                this.elementTopLeftY = this.y;
                this.elementTopMiddleX = this.x + this.width/2;
                this.elementTopMiddleY = this.y;
                this.elementTopRightX = this.x + this.width;
                this.elementTopRightY = this.y;
                this.elementBotomMiddleX = this.x + this.width/2;
                this.elementBotomMiddleY = this.y + this.height;

                this.semanticsTopLeftX = this.x;
                this.semanticsTopLeftY = this.y + this.height;
                this.semanticsWidth = this.width;
                
                this.totalHeight = this.height;
                
                if(this.togglerSemantics===true){
                    this.semanticsHeight = this.height*(this.dataOntologies.length+this.typeOntologies.length);
                }
                else{
                    this.semanticsHeight = 0;
                }

                this.subBoxesTopLeftX = this.x;
                this.subBoxesTopLeftY = this.semanticsTopLeftY+this.semanticsHeight;
                this.subBoxesWidth = 0;
                this.subBoxesHeight = 0;

		
		

		//Calculate the color of the type
		if(this.elementType==='simple'){
			
			if(this.linked===true){
				this.elementTypeColor = SIMPLE_FILL_ON;
			}
			else{
				this.elementTypeColor = SIMPLE_FILL_OFF;
			}
		}
		else if(this.elementType==='complex'){
			
			if(this.linked===true){
				this.elementTypeColor = COMPLEX_FILL_ON;
			}
			else{
				this.elementTypeColor = COMPLEX_FILL_OFF;
			}			
		}
            	else if(this.elementType==='inLine'){
			
			if(this.linked===true){
				this.elementTypeColor = INLINE_FILL_ON;
			}
			else{
				this.elementTypeColor = INLINE_FILL_OFF;
			}			
		}
                else if(this.elementType==='choice'){
			
			if(this.linked===true){
				this.elementTypeColor = CHOICE_FILL_ON;
			}
			else{
				this.elementTypeColor = CHOICE_FILL_OFF;
			}			
		}
		else{
			this.elementTypeColor = DEFAULT_FILL;
		}
		
		//Calculate the color of the name
		if(this.selected===true){
			this.titleColor = NAME_FILL_ON;
		}
		else{
			this.titleColor = NAME_FILL;
		}
	
		//Calculate the type and title font size
		this.typeFontSize = addjustFontSize(this.width/2, this.height, this.type);
		this.titleFontSize = addjustFontSize(this.width/2, this.height, this.title);
		
		//If we are suppose to show the semantics, validate the boxes            
                if(parent.togglerSemantics===true){
                
                    //Active your semantics if your parent have them active
                    this.togglerSemantics = true;
                    
                    //console.log(this.semanticBoxes.length);
                    //console.log(this.dataOntologies.length);
                    //console.log(this.typeOntologies.length);
                    
                    //Turn on each semantic box and make them validate themselves
                    for(var i=0; i<this.semanticBoxes.length; i++){
                        this.semanticBoxes[i].visible = true;    
                        this.semanticBoxes[i].validate();
                        
                        
                    }
                
                    //console.warn("PreTotal: "+this.totalHeight);
                    //console.warn(this.semanticBoxes.length);
                
                    //Add the total height to my final box
                    this.totalHeight += this.semanticBoxes.length*this.height;
                
                    //console.warn("PostTotal: "+this.totalHeight);
                
                }
                //Otherwise hide everything.
                else{
                    
                    //Desactive your semantics if your parent have them desactive
                    this.togglerSemantics = false;
                    
                    for(var i=0; i<this.semanticBoxes.length; i++){
                        this.semanticBoxes[i].visible = false;
                        this.semanticBoxes[i].validate();
                    }                    
                }
                
                
		
		//Now, if the subBox is open,
		//validate each of the subBoxes	
		if(this.subBoxOpen === true){
                    
			var accumulatedHeights = 0;
		
			for(var i=0; i<this.subBoxes.length; i++){
			
				var mySubBox = this.subBoxes[i];
				var totalSubBoxOpen = mySubBox.totalOpen();
				
				//I'm the one that should validate its external coordinates
				mySubBox.x = this.subBoxesTopLeftX;
				mySubBox.y = this.subBoxesTopLeftY + accumulatedHeights;
				mySubBox.width = this.width * SUBBOX_PERCENTAGE_WIDE;
				mySubBox.height = this.height;
				
				if(this.direction==='output'){
					mySubBox.x += this.width - mySubBox.width;
				}
				
				accumulatedHeights += totalSubBoxOpen * this.height;
				
                                //Add the semantics of every subBox to the total height
                                accumulatedHeights += mySubBox.totalOntologies()*this.height; 
                                
				//Finally validate yourself
				mySubBox.validate();
				
			}
			
			//Adjust your total height
			this.totalHeight += accumulatedHeights;
		
		}
		//If is not open 
		else{
			
			//We need to setup the corners of every subBox to my
			//left and rigth butom corners.
			var allSubBoxes = this.getBoxes(); //This actually include myself
			
                        //For every subBox which is not me
			for(var i=1; i<allSubBoxes.length; i++){
	
				var mySubBox = allSubBoxes[i];
				
				if(this.direction==='input'){
					
					//I'm the one that should validate its external coordinates
					mySubBox.x = this.subBoxesTopLeftX;
					mySubBox.y = this.subBoxesTopLeftY;
					mySubBox.width = (this.width) * SUBBOX_PERCENTAGE_WIDE;
					mySubBox.height = 0;
				
				}
				else{
										
					//I'm the one that should validate its external coordinates
					mySubBox.x = this.subBoxesTopLeftX + this.width;
					mySubBox.y = this.subBoxesTopLeftY;
					mySubBox.width = 0;
					mySubBox.height = 0;		
					
				}
				
				mySubBox.validate();
		
			}
			
			//Update the total Heights only
			//this.totalHeight = this.height;
			
		}
            
                //console.log("/////Total Height without Semantics: "+this.totalHeight);
            

                

                //console.log("/////Total Height with Semantics: "+this.totalHeight);
            
                
            
            
	}
	
	
	//Delete the link with the given ID if any
	//Return True if deleted
	//Return False if couldn't be found
	//(this function DOES NOT delete the reference in the other side)
	function deleteLink(id){
		
		var found = false;
		
		//Check every link in your list
		for(var i=0; i<this.links.length && found===false; i++){
			
			//If you had it, delete it and stop
			if(this.links[i].id === id){
				found = true;
				this.links.splice(i,1);
			}
			
		}
		
		//If you don't have any other link, turn the lights off
		if(this.links.length===0){
			this.selected = false;
			this.linked = false;
		}
		
		return found;
		
	}
	
	//Add a link to the list of links.
	function addLink(link){
		this.links.push(link);
                this.link = true;
	}

	//Turn on the link
	function turnOnLink(){
		this.linked = true;
	}
	
	//Turn off the link
	function turnOffLink(){
		this.linked = false;
	}
	
	//Turn on the select
	function turnOnSelect(){
		this.selected = true;
	}
	
	
	//Turn off the select
	function turnOffSelect(){
		this.selected = false;
	}
  
  
	//Draws this shape to a given context
	function draw(context){
		
		//Draw the background that covers this box and every possible
		//open box bellow this one
                context.fillStyle = NAME_FILL;
                //context.fillStyle = "purple";
		context.fillRect(this.x, this.y, this.width, this.totalHeight);  		
		context.strokeStyle = this.borderColor;
		context.lineWidth = this.borderWidth;
		context.strokeRect(this.x,this.y,this.width, this.totalHeight);	
		
		//Draw the type box
		//--Draw the box at right or left
		//--Draw also the border at the same time
		//--Draw also the text with the type

		//(In JS you must give the fill color just before the filling
		// so, this code get a bit redudant since you can't take out
		// each fill here first)
		context.textAlign = 'center';
		context.font= "bold "+this.typeFontSize+"px "+this.font;
		
        
            
		if(this.direction==="input"){
			context.fillStyle = this.elementTypeColor;
			context.fillRect(this.elementTopLeftX, this.elementTopLeftY, this.width/2, this.height);
			
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			context.strokeRect(this.elementTopLeftX, this.elementTopLeftY, this.width/2, this.height);
			
			context.fillStyle = this.fontColor;
			context.fillText(this.type, this.width/4 + this.elementTopLeftX, this.height/2 + this.elementTopLeftY + this.typeFontSize/4); //I don't know why it alight with /4 instead of /2 :-/

		}
		else{
			context.fillStyle = this.elementTypeColor;
			context.fillRect(this.elementTopMiddleX, this.elementTopMiddleY, this.width/2, this.height);  
			
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			context.strokeRect(this.elementTopMiddleX,this.elementTopMiddleY,this.width/2, this.height);
			
			context.fillStyle = this.fontColor;
			context.fillText(this.type, this.width/4 + this.elementTopMiddleX, this.height/2 + this.elementTopMiddleY + this.typeFontSize/4); //I don't know why it alight with /4 instead of /2 :-/
		}

		//Draw the name box
		//--Draw the box at right or left
		//--Draw also the border at the same time
		//--Draw also the text with the title
		context.textAlign = 'center';
		context.font= "bold "+this.titleFontSize+"px "+this.font;
		
		
		if(this.direction==="input"){
			context.fillStyle = this.titleColor;
			context.fillRect(this.elementTopMiddleX, this.elementTopMiddleY, this.width/2, this.height);  
			
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			context.strokeRect(this.elementTopMiddleX,this.elementTopMiddleY,this.width/2, this.height);
			
			context.fillStyle = this.fontColor;
			context.fillText(this.title, this.width/4 + this.elementTopMiddleX, this.height/2 + this.elementTopMiddleY + this.titleFontSize/4); //I don't know why it alight with /4 instead of /2 :-/

		}
		else{
			context.fillStyle = this.titleColor;
			context.fillRect(this.elementTopLeftX, this.elementTopLeftY, this.width/2, this.height);  
			
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			context.strokeRect(this.elementTopLeftX,this.elementTopLeftY,this.width/2, this.height);
			
			context.fillStyle = this.fontColor;
			context.fillText(this.title, this.width/4 + this.elementTopLeftX, this.height/2 + this.elementTopLeftY + this.titleFontSize/4); //I don't know why it alight with /4 instead of /2 :-/
		}
		
			
		//Draw the conectors if not invisible
		if(this.conectorInvisible===false){
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			var correctX = 0;
			if(this.direction==="output"){
				correctX = this.width;
			}
			else{
				correctX = -this.height;
			}
			
			context.strokeRect(this.x + correctX,this.y,this.height,this.height);

		}
		
		
		//Draw your compatibility if asked
		if(this.checkingLink===true){
			
			var gradientColor = "";
			
			switch(this.candidateCompatible){
				
				case 0:	
					gradientColor = COMP_FULL;
					break;
				case 1:		
					gradientColor = COMP_GOOD;
					break;                                        
				case 2:		
					gradientColor = COMP_UNKONWN;
					break;
				case 3:		
					gradientColor = COMP_NON;
					break;
				default:
					gradientColor = "black";
					break;
			}
			
			/*
			 * I can't find a nice gradient lighting effect
			 * Maybe in the future some designer can make use of this
			var myGradient = context.createLinearGradient(this.x - this.height, this.y, this.x,this.y);
			myGradient.addColorStop(1, gradientColor);
			myGradient.addColorStop(0.5, gradientColor);
			myGradient.addColorStop(0, 'rgba(204,204,204,0)');
			* 
			* context.fillStyle = myGradient;
			*/
			
			context.fillStyle = gradientColor;
			context.fillRect(this.x - Math.floor(this.height/3), this.y, Math.floor(this.height/3),this.height);
			context.strokeStyle = this.borderColor;
			context.lineWidth = this.borderWidth;
			context.strokeRect(this.x - Math.floor(this.height/3), this.y, Math.floor(this.height/3),this.height);
		}
		
		//If you are an output draw your links
		//(If you are an input there is no need to draw them again)
		if(this.direction==="output"){
			for(var i=0; i<this.links.length ; i++){
				var myLink = this.links[i];
				this.links[i].draw(context);
			}
			
			
			
		}
		
                //Draw your semantic boxes if the toggler is ON
                if(this.togglerSemantics === true){
                
                    for(var i=0; i<this.semanticBoxes.length; i++){
                        this.semanticBoxes[i].draw(context);

                    }
            
                }
                
                
		//If you subboxes are open draw that too:
		if(this.subBoxOpen===true){
			for(var i=0; i<this.subBoxes.length; i++){
				this.subBoxes[i].draw(context);
				
			}
			
		}
		//If you are close you might still want to draw your
		//children links. But only if you are an output.
		else{
			
			if(this.direction==="output"){
			
				var allSubBoxes = this.getBoxes();
				
				for(var i=1; i<allSubBoxes.length; i++){
					
					var mySubBox = allSubBoxes[i];
					
					for(var j=0; j<mySubBox.links.length; j++){
					
						var myLink = mySubBox.links[j];
						myLink.draw(context);
						
					}
					
				}
			
			}
			
		}
		
		

		

	}
			
	// Determine if a point is inside the box's bounds
	function contains(X, Y) {
	  return  (this.x <= X) && (X <= this.x + this.width) &&
			  (this.y <= Y) && (Y <= this.y + this.totalHeight);
	}
	
	//Return the box which is inside this box that correspond
	//with the given X,Y coordinates. Return null if nothing found
	function clickedBox(X,Y){
		
		var boxClicked = null;
		
		//If it is inside the whole package
		if(this.contains(X,Y)===true){
		
			//Check out first if it is me the one you clicked on
			if ((this.x <= X) && (X <= this.x + this.width) &&
			   (this.y <= Y) && (Y <= this.y + this.height)){
				  
				boxClicked = this;
			}
			//Look inside my children and find out which one
			else{
				
				//Look only if I was open
				if(this.subBoxOpen===true){
					for(var i=0; i<this.subBoxes.length && boxClicked===null; i++){
						boxClicked = this.subBoxes[i].clickedBox(X,Y);
						
					}
				}
			}
			//If it is not in the children neither then you
			//clicked in the empty space between the child tree
			//and the border of the box
			
		}
		
		return boxClicked;
		
	}
	
}


//Box with semantic information
//You can have four types of SemanticBoxes
//--operation related, this are ontologies of OPERATION and TOPIC, (operation)
//--operation input or output related, this use the ontology of DATA (input) (output)
//--element related, this are ontologies DATA or FORMAT. 
//--this could be element or type (element) (type)
function SemanticBox(ontology, id, title, parent, type){

	//Constructor

	this.ontology = ontology||"Unknown";
        this.id = id||-1;
	this.title = title||"Unknown";
	this.parent = parent; //Pointer to whom is your Piece parent or your ConnectionBox Parent.
        this.type = type||"Unknown";
	
	//Properties
        //This is the whole box
        this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;        
        //--This is the ID box number
        this.idTopLeftX = 0;
	this.idTopLeftY = 0;
	this.idWidth = 0;
	this.idHeight = 0;        
        //--This is the Ontology name box
	this.ontologyTopLeftX = 0;
	this.ontologyTopLeftY = 0;
	this.ontologyWidth = 0;
	this.ontologyHeight = 0;        
        //--This is the title box
	this.titleTopLeftX = 0;
	this.titleTopLeftY = 0;
	this.titleWidth = 0;
	this.titleHeight = 0;


        //Colors of the background
	this.ontologyColor = 'rgb(0,0,0)';
        this.idColor = 'rgb(0,0,0)';
	this.titleColor = 'rgb(0,0,0)';
        
        //Size of the fonts
        this.ontologyFontSize = 0;
        this.idFontSize = 0;
	this.titleFontSize = 0;
	
	//Options
	this.font = "Courier";
	this.fontColor = SEMANTIC_FONT_COLOR;
	this.borderColor = "orange";
	this.borderWidth = 2;
	
	//Flags
	this.linked = false;
        this.visible = true;
        this.valid = false;
  
	//Methods
	this.draw = draw;
	this.validate = validate;
        this.toString = toString;
        
        
        
        //Gives a representative string with the ConectionBox information
        function toString(){
            
            var toReturn = "";
            
            toReturn += "X: "+this.x + " Y:"+this.y + "\n";
            toReturn += "W: "+this.width + " H:"+this.height + "\n";
            toReturn += "SEMANTICS: "+this.id + " "+this.ontology+" "+this.title + "\n";
            toReturn += "Type: "+this.type+"\n";
            toReturn += "Linked?: "+this.linked+"\n";
            toReturn += "---------" + "\n";
            
            
            return toReturn;
            
        }
        
	
	//Recalculate graphical properties
	function validate(){
		
                
            //There are 2 possibilities;
            //You are the ontology of an operation box or you are the ontology
            //of an element
            
            //First get the Ontologies from your parent piece
            ontologiesCollection = parent.getOntologies();
            
            if(parent.class==="Piece"){
                
                //The semantic boxes are drawn at the button of the Piece
                //Center and whole wide if they are related to the operation
                //and left or right if they are related to the inputs and outputs
                

                
                /**
                console.log("1.....\n");
                console.log(ontologiesCollection[0]);
                console.log("2.....\n");
                console.log(ontologiesCollection[1]);
                console.log("3.....\n");
                console.log(ontologiesCollection[2]);
                console.log("4.....\n");
                console.log(parent.operationSemanticsDataOutputs[0].name);
                console.log("5.....\n");
                **/
                //The order of the validation doesn't matter. I will validate in the same order of
                //which they are suppose to be drawn.
                
                
                //Find out which type of semantic you are
                //You can be either topic, operation, input or output
                //Operation and topics are display similary
                
                //OPERATION SEMANTICS
                if(this.type==="operation" || this.type==="topic"){
                    
                    //search your index
                    found = false;
                    index = 0;
                    for(var i=0; i<ontologiesCollection[0].length && found === false; i++){
                    
                        if(ontologiesCollection[0][i].id === this.id){
                            index = i;
                            found = true;
                        }
                    }  
                    
                    //Based on the index, we know how many boxes are over me. Thus I can adjust the Y coordiante
                    
                    //Whole box
                    this.x = parent.x;
                    this.y = parent.footerY+parent.footerHeight*(1+index);
                    this.width = parent.width;
                    this.height = parent.footerHeight;
                    
                    //--This is the ID box number
                    this.idTopLeftX = this.x;
                    this.idTopLeftY = this.y;
                    this.idWidth = Math.floor(this.width*0.1);
                    this.idHeight = this.height;
                    //--This is the Ontology name box
                    this.ontologyTopLeftX = this.idTopLeftX + this.idWidth;
                    this.ontologyTopLeftY = this.y;
                    this.ontologyWidth = Math.floor(this.width*0.2);
                    this.ontologyHeight = this.height;
                    //--This is the title box
                    this.titleTopLeftX = this.ontologyTopLeftX + this.ontologyWidth;
                    this.titleTopLeftY = this.y;
                    this.titleWidth = Math.floor(this.width*0.7);
                    this.titleHeight = this.height;


                    this.ontologyFontSize = addjustFontSize(this.ontologyWidth, this.ontologyHeight, this.ontology);
                    this.idFontSize = addjustFontSize(this.idWidth, this.idHeight, this.id);
                    this.titleFontSize = addjustFontSize(this.titleWidth, this.titleHeight, this.title);
    
                }
                else if(this.type === "input"){
                    
                    //search your index
                    found = false;
                    index = 0;
                    for(var i=0; i<ontologiesCollection[1].length && found === false; i++){
                    
                        if(ontologiesCollection[1][i].id === this.id){
                            index = i;
                            found = true;
                        }
                    }  
                    
                    //Whole box
                    this.x = parent.x;
                    this.y = parent.footerY+parent.footerHeight*(1+index+ontologiesCollection[0].length);
                    this.width = Math.floor(parent.width/2);
                    this.height = parent.footerHeight;
                    
                    //--This is the ID box number
                    this.idTopLeftX = this.x;
                    this.idTopLeftY = this.y;
                    this.idWidth = Math.floor(this.width*0.1);
                    this.idHeight = this.height;
                    //--This is the Ontology name box
                    this.ontologyTopLeftX = this.idTopLeftX + this.idWidth;
                    this.ontologyTopLeftY = this.y;
                    this.ontologyWidth = Math.floor(this.width*0.2);
                    this.ontologyHeight = this.height;
                    //--This is the title box
                    this.titleTopLeftX = this.ontologyTopLeftX + this.ontologyWidth;
                    this.titleTopLeftY = this.y;
                    this.titleWidth = Math.floor(this.width*0.7);
                    this.titleHeight = this.height;


                    this.ontologyFontSize = addjustFontSize(this.ontologyWidth, this.ontologyHeight, this.ontology);
                    this.idFontSize = addjustFontSize(this.idWidth, this.idHeight, this.id);
                    this.titleFontSize = addjustFontSize(this.titleWidth, this.titleHeight, this.ontology);
                    
                }
                else if(this.type === "output"){
                    
                    //search your index
                    found = false;
                    index = 0;
                    for(var i=0; i<ontologiesCollection[2].length && found === false; i++){
                    
                        if(ontologiesCollection[2][i].id === this.id){
                            index = i;
                            found = true;
                        }
                    }  
                    
                    //Whole box
                    this.x = parent.x+Math.floor(parent.width/2);
                    this.y = parent.footerY+parent.footerHeight*(1+index+ontologiesCollection[0].length);
                    this.width = Math.floor(parent.width/2);
                    this.height = parent.footerHeight;
                    
                    //--This is the ID box number
                    this.idTopLeftX = this.x;
                    this.idTopLeftY = this.y;
                    this.idWidth = Math.floor(this.width*0.1);
                    this.idHeight = this.height;
                    //--This is the Ontology name box
                    this.ontologyTopLeftX = this.idTopLeftX + this.idWidth;
                    this.ontologyTopLeftY = this.y;
                    this.ontologyWidth = Math.floor(this.width*0.2);
                    this.ontologyHeight = this.height;
                    //--This is the title box
                    this.titleTopLeftX = this.ontologyTopLeftX + this.ontologyWidth;
                    this.titleTopLeftY = this.y;
                    this.titleWidth = Math.floor(this.width*0.7);
                    this.titleHeight = this.height;


                    this.ontologyFontSize = addjustFontSize(this.ontologyWidth, this.ontologyHeight, this.ontology);
                    this.idFontSize = addjustFontSize(this.idWidth, this.idHeight, this.id);
                    this.titleFontSize = addjustFontSize(this.titleWidth, this.titleHeight, this.title);                    
                    
                    
                }
                else{
                    console.error("Semantic Box of unknown type!");
                }
                
                
            }
            else if(parent.class==="ConectionBox"){

                if(this.type === "element"){

                    //search your index
                    found = false;
                    index = 0;
                    for(var i=0; i<ontologiesCollection[0].length && found === false; i++){

                        if(ontologiesCollection[0][i].id === this.id){
                            index = i;
                            found = true;
                        }
                    }  
                    
                    //Based on the index, we know how many boxes are over me. Thus I can adjust the Y coordiante

                    //Whole box
                    this.x = parent.semanticsTopLeftX;
                    this.y = parent.semanticsTopLeftY+parent.height*(index);
                    this.width = parent.width;
                    this.height = parent.height;

                    //--This is the ID box number
                    this.idTopLeftX = this.x;
                    this.idTopLeftY = this.y;
                    this.idWidth = Math.floor(this.width*0.1);
                    this.idHeight = this.height;

                    //--This is the Ontology name box
                    this.ontologyTopLeftX = this.idTopLeftX + this.idWidth;
                    this.ontologyTopLeftY = this.y;
                    this.ontologyWidth = Math.floor(this.width*0.2);
                    this.ontologyHeight = this.height;
                    
                    //--This is the title box
                    this.titleTopLeftX = this.ontologyTopLeftX + this.ontologyWidth;
                    this.titleTopLeftY = this.y;
                    this.titleWidth = Math.floor(this.width*0.7);
                    this.titleHeight = this.height;

                    //Adjust Font sizes
                    this.ontologyFontSize = addjustFontSize(this.ontologyWidth, this.ontologyHeight, this.ontology);
                    this.idFontSize = addjustFontSize(this.idWidth, this.idHeight, this.id);
                    this.titleFontSize = addjustFontSize(this.titleWidth, this.titleHeight, this.title);  
                    
                    
                }
                else if(this.type === "type"){

                    //search your index
                    found = false;
                    index = 0;
                    for(var i=0; i<ontologiesCollection[1].length && found === false; i++){

                        if(ontologiesCollection[1][i].id === this.id){
                            index = i;
                            found = true;
                        }
                    }  

                    //Based on the index, we know how many boxes are over me. Thus I can adjust the Y coordiante

                    //Whole box
                    this.x = parent.semanticsTopLeftX;
                    this.y = parent.semanticsTopLeftY+parent.height*(index+ontologiesCollection[0].length);
                    this.width = parent.width;
                    this.height = parent.height;

                    //--This is the ID box number
                    this.idTopLeftX = this.x;
                    this.idTopLeftY = this.y;
                    this.idWidth = Math.floor(this.width*0.1);
                    this.idHeight = this.height;
                    //--This is the Ontology name box
                    this.ontologyTopLeftX = this.idTopLeftX + this.idWidth;
                    this.ontologyTopLeftY = this.y;
                    this.ontologyWidth = Math.floor(this.width*0.2);
                    this.ontologyHeight = this.height;
                    //--This is the title box
                    this.titleTopLeftX = this.ontologyTopLeftX + this.ontologyWidth;
                    this.titleTopLeftY = this.y;
                    this.titleWidth = Math.floor(this.width*0.7);
                    this.titleHeight = this.height;

                    //Adjust Font sizes
                    this.ontologyFontSize = addjustFontSize(this.ontologyWidth, this.ontologyHeight, this.ontology);
                    this.idFontSize = addjustFontSize(this.idWidth, this.idHeight, this.id);
                    this.titleFontSize = addjustFontSize(this.titleWidth, this.titleHeight, this.title);


                    
                }
                else{
                    console.error("Semantic Box of unknown type!");
                }

            }
            else{
                console.error("Semantic Box with unvalid parent in x:"+this.x+" y:"+this.y);
            }

            this.idColor = SEMANTIC_ID_COLOR;
            this.ontologyColor = SEMANTIC_ONTOLOGY_COLOR;
            this.titleColor = SEMANTIC_TITLE_COLOR;
            
            this.valid = true;
                
                
	}
	  
	//Draws this shape to a given context
	function draw(context){
                
                if(this.visible===true){
                    //Draw the whole box empty
                    context.lineWidth = this.borderWidth;
                    context.strokeStyle = this.borderColor;                
                    context.strokeRect(this.x,this.y,this.width, this.height);

                    //Draw the ID box
                    context.fillStyle = this.idColor ;
                    context.fillRect(this.idTopLeftX, this.idTopLeftY, this.idWidth, this.idHeight);  		
                    context.strokeStyle = this.borderColor;
                    context.lineWidth = this.borderWidth;
                    context.strokeRect(this.idTopLeftX, this.idTopLeftY, this.idWidth, this.idHeight);

                    /**
                    console.log(this.idColor);
                    console.log(this.borderColor);
                    console.log(this.borderWidth);
                    console.log("X: "+this.x);
                    console.log("Y: "+this.y);
                    console.log("W: "+this.width);
                    console.log("H: "+this.height);
                    console.log("idX: "+this.idTopLeftX);
                    console.log("idY: "+this.idTopLeftY);
                    console.log("idW: "+this.idWidth);
                    console.log("idH: "+this.idHeight);
                    **/




                    //Draw the Ontology box
                    context.fillStyle = this.ontologyColor ;
                    context.fillRect(this.ontologyTopLeftX, this.ontologyTopLeftY, this.ontologyWidth, this.ontologyHeight);  		
                    context.strokeStyle = this.borderColor;
                    context.lineWidth = this.borderWidth;
                    context.strokeRect(this.ontologyTopLeftX, this.ontologyTopLeftY, this.ontologyWidth, this.ontologyHeight);  		

                    //Draw the Title box
                    context.fillStyle = this.titleColor;
                    context.fillRect(this.titleTopLeftX, this.titleTopLeftY, this.titleWidth, this.titleHeight);  		
                    context.strokeStyle = this.borderColor;
                    context.lineWidth = this.borderWidth;
                    context.strokeRect(this.titleTopLeftX, this.titleTopLeftY, this.titleWidth, this.titleHeight); 

                    //Draw the labels
                    context.textAlign = 'center';
                    //context.font= "bold "+this.typeFontSize+"px "+this.font;
                    context.fillStyle = this.fontColor;
                    //--ID
                    context.font= "bold "+this.idFontSize+"px "+this.font;
                    context.fillText(this.id, this.idTopLeftX+this.idWidth/2, this.titleTopLeftY + this.titleHeight/2  +  this.idFontSize/4);
                    //--Ontology
                    context.font= "bold "+this.ontologyFontSize+"px "+this.font;
                    context.fillText(this.ontology, this.ontologyTopLeftX+this.ontologyWidth/2, this.titleTopLeftY + this.titleHeight/2 +  this.ontologyFontSize/4);
                    //--Title
                    context.font= "bold "+this.titleFontSize+"px "+this.font;
                    context.fillText(this.title, this.titleTopLeftX+this.titleWidth/2, this.titleTopLeftY + this.titleHeight/2 +  this.titleFontSize/4);
                
                }
	}
	
}



//This is a graphical object that represent a WSDL operation or port
//inside the main canvas.
function Piece(id, x, y, width, height, fill,title,origin) {

	//Constructor
	this.id = id||0;
	this.x = x||0;
	this.y = y||0;
	this.width = width||1;
	this.height = height||1;
	this.fill = fill||"black";
	this.title = title||"Operation X";
        this.origin = origin||"Unknown";
        this.class = "Piece";
        this.workflowScore = 0;
        this.accumulatedWorkflowScore = 0;
  
	//List of inputs and outputs
	this.inputs = [];
	this.outputs = [];
	
	//List with the compatible groups
	/**
	 * At the butom left of the footer there is a collection
	 * of squares. Each square color represent which operation
	 * is compatible with this operation
	 * 
	 * It also has a number with the distances in the ontology
	 * between the two operations
	 
	this.outputCompatible = []; //These operation can semantically link with me
	this.inputCompatible = []; //I can semantically link with these operations
	**/
       
       
	this.operationSemantics = [];
        this.operationOntologyReferences = [];
	//this.operationSemanticsTitle = "Unknown"; //wut?
        this.operationSemanticsDataOutputs = [];
        this.operationSemanticsDataInputs = [];
        
        this.operationPortInheritsSemantics = []; //To be use later; this track the semantics which have the port.
        
        
        //List of SemanticBoxes
        this.semanticBoxes = [];
        
        //List of Links
        this.outputLinks = []; //Links which go away from here
        this.inputLinks = [];  //Links that arrive here
        this.candidateCompatible = -1;

	//Inner propierties
	//--Frame
	this.frameHeight = 30;
	this.frameFullX = 0;
	this.frameFullY = 0;
	this.frameFullWidth = 0;
	this.frameFullHeight = 0;
        
	this.frameSwapX = 0;
	this.frameSwapY = 0;
	this.frameSwapWidth = 0;
	this.frameSwapHeight = 0;
        
        this.frameTogglerSemanticX = 0;
	this.frameTogglerSemanticY = 0;
	this.frameTogglerSemanticWidth = 0;
	this.frameTogglerSemanticHeight = 0;
        this.frameTogglerSemanticColor = TOGGLER_SEMACTIC_VIEWER_BOX_COLOR_OFF;
        
	this.frameCloseX = 0;
	this.frameCloseY = 0;
	this.frameCloseWidth = 0;
	this.frameCloseHeight = 0;
        
	this.frameCollapseX = 0;
	this.frameCollapseY = 0;
	this.frameCollapseWidth = 0;
	this.frameCollapseHeight = 0;
        
	this.framePercentageHeight = FRAME_PERCENTAGE_HEIGHT;
	//--Title
	this.titlePercentageHeight = TITLE_PERCENTAGE_HEIGHT;
	this.titleHeight = 100;
	this.titleFontSize = 50;
	this.titleFontProportion = 2;
	//--Body
	this.bodyOffsetY = 0;
	this.bodyHeight = 0;
	//--Footer
	this.footerPercentageHeight = FOOTER_PERCENTAGE_HEIGHT;
	this.footerHeight = 0;
	this.footerY = 0;
	this.footerOutputColorBoxX = 0;
	this.footerOutputColorBoxY = 0;
	this.footerOutputColorBoxWide = 0;
	this.footerOutputColorBoxHeight = 0;
        
        this.footerWSDLOriginX = 0;
	this.footerWSDLOriginY = 0;
	this.footerWSDLOriginWide = 0;
	this.footerWSDLOriginHeight = 0;

    	this.footerFontSize = 20;
	this.footerFontProportion = 2;
	
        //Workflow view
        this.piecesScoresY = 0;
        this.finalHeight = 0;
        this.pieceHeight = 0;
        this.finalY = 0;
        this.operationsWorkflowScores = [];
        this.backgroundFontSize = 0;
        this.pieceFontSize = 0;
        this.idFontSize = 0;
        this.pieceScoreFontSize = 0;
        this.totalFontSize = 0;
        this.totalScoreFontSize = 0;

	//--Others
	this.lastWidth = this.width; //?
	this.lastHeight = this.height;

	//Flags
	this.collapsed = false;
	this.valid = false;
	this.full = false;
        this.togglerSemantics = false;
        this.conectorInvisible = true;
        this.linked = false;
        this.checkingLink = false;
        this.workflowView = false;
        this.massSelected = false;
        
	
	//Methods
	this.draw = draw;
	this.contains = contains;
	this.closeClick = closeClick;
	this.collapseClick = collapseClick;
        this.semanticClick = semanticClick;
	this.addInput = addInput;
	this.addOutput = addOutput;
	this.swapCollapseStatus = swapCollapseStatus;
        this.swapSemanticStatus = swapSemanticStatus;
	this.saveSize = saveSize;
	this.restoreSize = restoreSize;
	this.collapseSize = collapseSize;
	this.inOutConnection = inOutConnection;
	this.inInConnection = inInConnection;
	this.turnOnOutput = turnOnOutput;
	this.turnOffAllOutputs = turnOffAllOutputs;
	this.deleteLinks = deleteLinks;
        this.deleteOperationLink = deleteOperationLink;
        this.deleteConnectedLink = deleteConnectedLink;
	this.validate = validate;
	this.colorBoxClick = colorBoxClick;
	this.getInputBoxes = getInputBoxes;
        this.getOutputBoxes = getOutputBoxes;
        this.initFromOperationWSDL = initFromOperationWSDL;
        this.toString = toString;
        this.getOntologies = getOntologies;
        this.connectWithPiece = connectWithPiece;
        this.getPiecesConnected = getPiecesConnected;
        this.pieceInList = pieceInList;
        this.addInputLink = addInputLink;
        this.addOutputLink = addOutputLink;
        this.getTopics = getTopics;
        this.getPiecesInputConnected = getPiecesInputConnected;
        this.getWorkFlowScoreWithOperation = getWorkFlowScoreWithOperation;
        this.updateWorkflowScore = updateWorkflowScore;
        this.updateAccumulatedWorkflowScore = updateAccumulatedWorkflowScore;

        //Retrieve the sum of every workflow score from your input connections
        //Returns the result
        function updateAccumulatedWorkflowScore(){
            
            this.accumulatedWorkflowScore = 0;
            //Inneficient recursive version only?
            
            this.accumulatedWorkflowScore += this.workflowScore;
            
            var myPrevious = this.getPiecesInputConnected();
            
            //For each of my connections
            for(var i=0; i<myPrevious.length; i++){
                
                //Tell the connection to update itself
                var score = myPrevious[i].updateAccumulatedWorkflowScore();
                
                //Add the total to my final score
                this.accumulatedWorkflowScore += score;
                
            }
        
            return this.accumulatedWorkflowScore;
            
            
        }
    
        //Update my workflowScore and return the result
        function updateWorkflowScore(){
            
            this.workflowScore = 0;
            var myConnections = this.getPiecesInputConnected();
            
            //Update also your internal array with the score for each operation
            this.operationsWorkflowScores.splice(0,this.operationsWorkflowScores.length);
            
            for(var i=0; i<myConnections.length; i++){
                
                var score = this.getWorkFlowScoreWithOperation(myConnections[i]);
                this.workflowScore += score;
                this.operationsWorkflowScores.push(score);
                
            }
            
            if(myConnections.length>0){
                this.workflowScore = this.workflowScore/myConnections.length;
            }
        
            return this.workflowScore;
        }

        //For a given piece, creates a matrix of this piece amount of topics times the other piece amount of topics
        //Measure the distances between every combination of topics
        //Add all the points of the matrix and divide it by the amount of points
        //That is the final score
        function getWorkFlowScoreWithOperation(piece){
           
           //console.log(this.title);
           //console.log(piece.title);
           
           //Initialize the topic list and concat to the same variable
           var ATopics = this.getTopics();
           var BTopics = piece.getTopics();
           
           var ATopics = ATopics[0].concat(ATopics[1]);
           var BTopics = BTopics[0].concat(BTopics[1]);
           
           var matrixScore = [];
           var totalScore = 0;
           
           //Initialize the matrix to the distances between topics
           for(var i=0; i<ATopics.length; i++){
               
               matrixScore[i] = [];
               
               for(var j=0; j<BTopics.length; j++){
                   
                   //Try to get the topic using specializations only
                   var distance = The_Ontology.distance("topic",ATopics[i].id,BTopics[j].id);
                   
                   //If you got it, decrease the points to a 10% to reward a good workflow.
                   if(distance>=0){
                       distance = distance/10;
                   }
                   //If you couldn't find it; then use the complete distance
                   else{
                       distance = The_Ontology.distanceComplete("topic",ATopics[i].id,BTopics[j].id);
                   }
                   
                   matrixScore[i].push(distance);
                   totalScore += distance;
                   
               }
               
           }
       
           if(ATopics.length * BTopics.length>0){
            totalScore = totalScore/(ATopics.length * BTopics.length);           
           }
           
           return totalScore;
           
        }
        
        //Return a list of references with every piece which is connected with my inputs
        function getPiecesInputConnected(){
            
            var references = [];
            var myBoxes = this.getInputBoxes();
            
            //For every output box of mine which is linked
            for(var i=0; i<myBoxes.length; i++){
            
                if(myBoxes[i].linked === true){
            
                    //Get the boxes that links with that box
                    for(var j=0; j<myBoxes[i].links.length; j++){
                    
                        //For each box linking with me, get it parent
                        var parent = (myBoxes[i].links[j].outputBox.parent);
                        
                        //Check out if I have it already; if not, put it in the list
                        if(parent.pieceInList(references) === false){
                            
                            references.push(parent);
                            
                        }
                        
                    }
                    
                }
                
            }
        
            return references;
            
        }
        
        //Analyze the semantics and extract a list with the topics from the operation itself and the topics from the operation semantics from has_topic
        //Return two list, the fist one with the topics from the operation, the second one with the topics from the operation semantics
        function getTopics(){
            
            var operationAnnotations = [];
            var topicAnnotations = [];
            
            //Separate the ontologies into operation and topics
            for(var i=0; i<this.operationSemantics.length; i++){
                
                if(this.operationSemantics[i].ontology==="topic"){
                    
                    var operationOntologyItem = The_Ontology.getNodeByID(this.operationSemantics[i].id,"topic");
                    topicAnnotations.push(operationOntologyItem);
                }
                else if(this.operationSemantics[i].ontology==="operation"){
                    var operationOntologyItem = The_Ontology.getNodeByID(this.operationSemantics[i].id,"operation");
                    operationAnnotations.push(operationOntologyItem);    
                    
                }
                else{
                    console.error("Bad SAWSDL detected in "+operation.name);
                }
                
            }
        
            //For each topic for each operation, retreive it
            var topicsFromOperations = [];
            for(var i=0; i<operationAnnotations.length; i++){
                
                for(var j=0; j<operationAnnotations[i].has_topic.length; j++){
                    
                    topicsFromOperations.push(operationAnnotations[i].has_topic[j]);
                    
                }
                
            }
            
            return[topicAnnotations,topicsFromOperations];
             
        }
        
        //Add a link to the list of leaving links
        function addOutputLink(link){
            this.outputLinks.push(link);
            //console.log("Added OutLink: "+link.id+" to this piece: "+this.title);
        }
        
        //Add a link to the list of arriving links
        function addInputLink(link){
            this.inputLinks.push(link);
            //console.log("Added IniLnk: "+link.id+" to this piece: "+this.title);
        }
        
        //Return TRUE or FALSE if my refence is in a given list of Pieces
        function pieceInList(list){
                
           var found = false;
                
           for(var i=0; i<list.length && found===false; i++){
               
               if(this.id === list[i].id){
                   
                   found = true;
                   
               }
               
           }     
       
           return found;
                
        }
        
        //Return TRUE or FALSE if I connect with the given piece;
        function connectWithPiece(piece){
            
            var myBoxes = this.getOutputBoxes();
            
            var connected = false;
            
            //console.log("ConnectWithPiece ----------------------------");
            //console.log("Is piece " + this.id + " - " + this.title);
            //console.log("connected to " + piece.id + " - " + piece.title);
            
            //For every output box of mine which is linked
            for(var i=0; i<myBoxes.length && connected===false; i++){

                //console.log("Checking " + myBoxes[i].toString());
                //console.log("Checking " + myBoxes[i].type);
                
                if(myBoxes[i].linked === true){
                    
                    //console.log("Is linked!");
            
                    //Get the boxes that links with that box
                    for(var j=0; j<myBoxes[i].links.length && connected === false; j++){ 
                
                        //console.log("Checking againts" + myBoxes[i].links[j].inputBox.type);
                        //console.log("Parent is: " + myBoxes[i].links[j].inputBox.parent.id + " - " + myBoxes[i].links[j].inputBox.parent.title);
                
                        //For each of the links, check if the parent of the other end has the candidate ID
                        if(myBoxes[i].links[j].inputBox.parent.id === piece.id){
                            
                            //console.log("Is connected!!");
                            connected = true;
                            
                            
                        }
                        
                    }
                        
                }    

                
            }
            
            //console.log("------------------");
        
            return connected;
            
        }
        
        //Return a list of references with every piece I connect with
        function getPiecesConnected(){
            
            var references = [];
            var myBoxes = this.getOutputBoxes();
            
            //For every output box of mine which is linked
            for(var i=0; i<this.myBoxes.length; i++){
            
                if(myBoxes[i].linked === true){
            
                    //Get the boxes that links with that box
                    for(var j=0; j<myBoxes[i].links.length; j++){
                    
                        //For each box linking with me, get it parent
                        var parent = (myBoxes[i].links[j].inputBox.parent);
                        
                        //Check out if I have it already; if not, put it in the list
                        if(parent.pieceInList(references) === false){
                            
                            references.push(parent);
                            
                        }
                        
                    }
                    
                }
                
            }
        
            return references;
            
        }
        
        
        //Delete a link that connect me with the given piece. If there were no link return -1. The Link ID otherwise
        function deleteConnectedLink(piece){
            
            var deleted = false;
            var linkID = -1;
            
            //if(this.connectWithPiece(piece)){
                
                //console.log("They are connected, lets find the link");
                
                //For every link in my operation Link list, look for the other piece
                for(var i=0; i<this.outputLinks.length && deleted === false; i++){
                    
                    var link = this.outputLinks[i];
                    
                    //console.log("Checking link that goes to: " + link.inputPiece.title);
                    //console.log("My candidate is: "+piece.title);
                    
                    if(link.inputPiece === piece){
                        
                        //console.log("Founded");
                        
                        //We found the right link
                        //Delete it from both places
                        this.deleteOperationLink(link.id);
                        
                        this.validate();

                        linkID = link.id;

                        deleted = true;
                        
                    }
                    
                }
                
                
            //}
            
            return linkID;
            
        }
        
        //Return the ontologies of this piece
        //Return a list of lists with the ontologies of the operation, the inputs and the outputs
        function getOntologies(){
            
            return [this.operationSemantics, this.operationSemanticsDataInputs, this.operationSemanticsDataOutputs];
                                                                                
            
        }
             
        //Gives a representative string with the Piece information
        function toString(){
            
            var toReturn = "";
            
            toReturn += "Piece ID: "+this.id + "\n";
            toReturn += "X: "+this.x + " Y:"+this.y + "\n";
            toReturn += "Title: "+this.title + "\n";
            //toReturn += "Operation Semantics Title: "+this.operationSemanticsTitle + "\n";
            toReturn += "Operation Semantic List:" + "\n";
            for(var i=0; i<this.operationSemantics.length; i++){
                toReturn += "ONT: "+this.operationSemantics[i].ontology + " ID: "+this.operationSemantics[i].id + "\n";    
            }
            toReturn += "---------" + "\n";
            toReturn += "Operation Semantic INPUTS List:" + "\n";
            for(var i=0; i<this.operationSemanticsDataInputs.length; i++){
                toReturn += "ONT: "+this.operationSemanticsDataInputs[i].ontology + " ID: "+this.operationSemanticsDataInputs[i].id + " Name: "+this.operationSemanticsDataInputs[i].name + "\n";    
            }
            toReturn += "---------" + "\n";
            toReturn += "Operation Semantic OUTPUTS List:" + "\n";
            for(var i=0; i<this.operationSemanticsDataOutputs.length; i++){
                toReturn += "ONT: "+this.operationSemanticsDataOutputs[i].ontology + " ID: "+this.operationSemanticsDataOutputs[i].id + " Name: "+this.operationSemanticsDataOutputs[i].name + "\n";    
            }            
            toReturn += "---------" + "\n";
            
            toReturn += "Total IN" + this.inputs.length + "\n";
            toReturn += "Total OUT" + this.outputs.length + "\n";
            
            
            return toReturn;
            
        }
        
        //Initialize the Piece after the constructor is called using a Operation WSDL object
        function initFromOperationWSDL(operation){
            
            //Get the title
            this.title = operation.name;
            
            //Get the operation semantics (operation_0394, operation_3933, ... )
            var operationOntologyItem = null;
            this.operationSemantics = toEDAM(operation.semantic);
            
            
            //console.log(this.operationSemantics.length);
            //console.log(this.operationSemantics[0].id);
            //console.log(this.operationSemantics[0].ontology);
            
            
            var operationAnnotations = [];
            var topicAnnotations = [];
            
            //Separate the ontologies into operation and topics
            for(var i=0; i<this.operationSemantics.length; i++){
                
                if(this.operationSemantics[i].ontology==="topic"){
                    
                    var operationOntologyItem = The_Ontology.getNodeByID(this.operationSemantics[i].id,"topic");
                    topicAnnotations.push(operationOntologyItem);
                }
                else if(this.operationSemantics[i].ontology==="operation"){
                    var operationOntologyItem = The_Ontology.getNodeByID(this.operationSemantics[i].id,"operation");
                    operationAnnotations.push(operationOntologyItem);    
                    
                }
                else{
                    console.error("Bad SAWSDL detected in "+operation.name);
                }
                
            }
        
            //Get the has inputs and has output of every Operation (we should have only one)
            for(var i=0; i<operationAnnotations.length; i++){
             
                for(var j=0; j<operationAnnotations[i].has_inputs.length; j++){
                    
                    var dataOntologyItem = The_Ontology.getNodeByID(operationAnnotations[i].has_inputs[j].id,"data");
                    this.operationSemanticsDataInputs.push({ontology: "data", id:operationAnnotations[i].has_inputs[j].id, name:dataOntologyItem.name}); //I could put here the reference instead; not sure what would be best
                }
            
            
                for(var j=0; j<operationAnnotations[i].has_outputs.length; j++){
                    var dataOntologyItem = The_Ontology.getNodeByID(operationAnnotations[i].has_outputs[j].id,"data");
                    this.operationSemanticsDataOutputs.push({ontology: "data", id:operationAnnotations[i].has_outputs[j].id, name:dataOntologyItem.name}); //I could put here the reference instead; not sure what would be best
                }
                
                
            }
            
            //And now push the ConnectionBoxes with the inputs and outputs

            var inputsElements = operation.getInputElements();
            for(var i=0; i<inputsElements.length; i++){
                
                var newSubBox = new ConectionBox(0, 0, 1, 1, "simple", "input", "new_box", this, "unknown");
                newSubBox.initFromElementWSDL(inputsElements[i]);
                this.inputs.push(newSubBox);
                
            }
        
        
            var outputsElements = operation.getOutputElements();
            for(var i=0; i<outputsElements.length; i++){
                
                var newSubBox = new ConectionBox(0, 0, 1, 1, "simple", "output", "new_box", this, "unknown");
                newSubBox.initFromElementWSDL(outputsElements[i]);
                this.outputs.push(newSubBox);
                
            }

            //console.warn("I" + this.inputs.length);
            //console.warn("FI" + inputsElements.length);

            //Initialize the Semantic Boxes for this piece
            for(var i=0; i<topicAnnotations.length; i++){                
                var title = The_Ontology.getNodeByID(topicAnnotations[i].id,"topic").name;                
                var newSemanticBox = new SemanticBox("Topic",topicAnnotations[i].id, title,this, "topic");
                this.semanticBoxes.push(newSemanticBox);
            }            
            for(var i=0; i<operationAnnotations.length; i++){                
                var title = The_Ontology.getNodeByID(operationAnnotations[i].id,"operation").name;
                var newSemanticBox = new SemanticBox("Operation",operationAnnotations[i].id, title,this, "operation");
                this.semanticBoxes.push(newSemanticBox);
            }
            for(var i=0; i<this.operationSemanticsDataInputs.length; i++){
                var title = The_Ontology.getNodeByID(this.operationSemanticsDataInputs[i].id,"data").name;
                var newSemanticBox = new SemanticBox(this.operationSemanticsDataInputs[i].ontology,this.operationSemanticsDataInputs[i].id, title,this, "input");
                this.semanticBoxes.push(newSemanticBox);
            }
            for(var i=0; i<this.operationSemanticsDataOutputs.length; i++){
                var title = The_Ontology.getNodeByID(this.operationSemanticsDataOutputs[i].id,"data").name;
                var newSemanticBox = new SemanticBox(this.operationSemanticsDataOutputs[i].ontology,this.operationSemanticsDataOutputs[i].id, title,this, "output");
                this.semanticBoxes.push(newSemanticBox);
            }  
            
        }
	
	//Return all inputBoxes references, no matter if they are collapsed
	function getInputBoxes(){
		
		var inputBoxes = [];
		
		for(var i=0; i<this.inputs.length; i++){
			
			var parentBox = this.inputs[i];
			var theBoxes = parentBox.getBoxes();
			
			for(var j=0; j<theBoxes.length; j++){
				
				inputBoxes.push(theBoxes[j]);
				
			}
                    
                        inputBoxes.push(parentBox);
		}
		
		return inputBoxes;
		
	}
    
	//Return all outputBoxes references, no matter if they are collapsed
	function getOutputBoxes(){
		
		var outputBoxes = [];
		
		for(var i=0; i<this.outputs.length; i++){
			
			var parentBox = this.outputs[i];
			var theBoxes = parentBox.getBoxes();
			
			for(var j=0; j<theBoxes.length; j++){
				
				outputBoxes.push(theBoxes[j]);
				
			}
                    
                        outputBoxes.push(parentBox);
		}
		
		return outputBoxes;
		
	}    
    
	//This function recalculate points inside the Piece
	//so the draw function doesn't have to do it every time
	function validate(){
		
                //console.warn(this.toString());
            
		//-----GENERAL-----------
		//Calculate the total height if the piece is collapsed
		if(this.collapsed === true){
			this.height = this.titleHeight + this.frameHeight + this.footerHeight;
			
		}
		else{
			//Nothing here, ever?, really?
			
		}
		
		//-----FRAME-----------
                {
		//Calculate the height of the frame
		this.frameHeight = Math.floor(this.height*this.framePercentageHeight/100);
		//If it is too large limit it to the maximum
		if(this.frameHeight > FRAME_MAX_ABSOLUTE_HEIGHT){
			this.frameHeight = FRAME_MAX_ABSOLUTE_HEIGHT;

		}
		
		//Calculate the colapse botom
		this.frameCollapseX = Math.floor(this.x+this.width-this.frameHeight*2.4);
		this.frameCollapseY = Math.floor(this.y+this.frameHeight*0.1);
		this.frameCollapseWidth = Math.floor(this.frameHeight*0.9);
		this.frameCollapseHeight = Math.floor(this.frameHeight*0.9);
			
		//Calculate the close botom
		this.frameCloseX = Math.floor(this.x+this.width-this.frameHeight*1.1);
		this.frameCloseY = Math.floor(this.y+this.frameHeight*0.1);
		this.frameCloseWidth = Math.floor(this.frameHeight*0.9);
		this.frameCloseHeight = Math.floor(this.frameHeight*0.9);
		
		//Calculate the full botom
		this.frameFullX = Math.floor(this.x+this.frameHeight*1.1);
		this.frameFullY = Math.floor(this.y+this.frameHeight*0.1);
		this.frameFullWidth = Math.floor(this.frameHeight*0.9);
		this.frameFullHeight = Math.floor(this.frameHeight*0.9);		
		
		//Calculate the swap botom
		this.frameSwapX = Math.floor(this.x+this.frameHeight*2.4);
		this.frameSwapY = Math.floor(this.y+this.frameHeight*0.1);
		this.frameSwapWidth = Math.floor(this.frameHeight*0.9);
		this.frameSwapHeight = Math.floor(this.frameHeight*0.9);		
		
                //Calculate the toggler for semantics button
		{
		this.frameTogglerSemanticX = Math.floor(this.x+this.width/2 - this.width*0.1);
		this.frameTogglerSemanticY = Math.floor(this.y+this.frameHeight*0.1);
		this.frameTogglerSemanticWidth = Math.floor(this.width*0.2);
		this.frameTogglerSemanticHeight = Math.floor(this.frameHeight*0.9);
                if(this.togglerSemantics===true){
                    this.frameTogglerSemanticColor = TOGGLER_SEMACTIC_VIEWER_BOX_COLOR_ON;
                }
                else{
                    this.frameTogglerSemanticColor = TOGGLER_SEMACTIC_VIEWER_BOX_COLOR_OFF;
                }
                
		}

                }
                
                
		 
		//-----TITLE-----------
                {
		//Calculate the title height
		this.titleHeight = Math.floor(this.height*this.titlePercentageHeight/100);
		if(this.titleHeight > TITLE_MAX_ABSOLUTE_HEIGHT){
			this.titleHeight = TITLE_MAX_ABSOLUTE_HEIGHT;
		}
		
		
		//Calculate the title font size
		this.titleFontSize = addjustFontSize(this.width, this.titleHeight, this.title);
                
		

                
                
                }
                
                
                
                
		//-----FOOTER-----------
		//Calculate the footer height
		this.footerHeight = Math.floor(this.height*this.footerPercentageHeight/100);
		if(this.footerHeight > FOOTER_MAX_ABSOLUTE_HEIGHT){
			this.footerHeight = FOOTER_MAX_ABSOLUTE_HEIGHT;
			
		}
		
		
		//-----BODY-----------		
		//Calculate the body size
		this.bodyOffsetY = this.titleHeight + this.frameHeight;
		this.bodyHeight = this.height - this.frameHeight - this.titleHeight - this.footerHeight;
                //The body Height depend of the rest of the variables.
                //The high of the conection boxes inside the body depends of the height of the body.
                
                var totalRows = 0; //This count how many rows are we going to have
                                   //A Row is either a connection box or a semantic box
                
		//For each of the inputs boxes count how many boxes has open and how many ontologies are going to be display
		var totalInputs = this.inputs.length;
                
		var totalBoxes = 0;
                var totalOntologies = 0;
		for (var i=0; i<totalInputs; i++){	
                    totalBoxes += this.inputs[i].totalOpen();
                    totalOntologies += this.inputs[i].totalOntologies();
		}
            
		totalRows = totalBoxes + totalOntologies;
                
		//Find out the height for each row
		var boxHeight = 0;
		if(totalBoxes!==0){
			boxHeight = (this.bodyHeight/totalRows) * 0.9;	
		}
		
                /**
                console.log("BH: " + this.bodyHeight);
                console.log("TI: " + totalInputs );
                console.log("TB: " + totalBoxes);
                console.log("TO: " + totalOntologies);
                console.log("TR: " + totalRows);
                **/
                
		//If the height is bigger than the maximum, limit the height
		if(boxHeight>CONECTIONBOX_MAX_ABSOLUTE_HEIGHT){
			boxHeight = CONECTIONBOX_MAX_ABSOLUTE_HEIGHT;
		}
            
                //console.log("correctedBH: "+ boxHeight);
		
		//Find out how much space left there is in the body of the piece
		//(Is it always a 10% of the body height)
		var rest = this.bodyHeight - boxHeight*totalRows;
                
                //console.log("Rest: " + rest);
                
		//Find out how much free space there is for each GROUP of boxes
		var restPerInput = 0;
		if(totalInputs!==0){
			restPerInput = Math.floor(rest/(totalInputs+1)); //<-- GROUP!
		}

                //console.log("rest/Input: " + restPerInput);
		
		//Find out the width for each input box
		var boxWidth = this.width * CONECTIONBOX_PERCENTAGE_WIDTH;
		
		//-- I AM the one to validate the box coordinates	
                //console.log("@@@@@@@  -- Sub-boxes");
		var accumulatedOffsetY = 0;
		for(var i=0; i<totalInputs; i++){
		
			var myBox = this.inputs[i];
			var myBoxTotalOpen = myBox.totalOpen();
                        var myBoxTotalOntologies = myBox.totalOntologies();
			var myBoxTotalHeight = boxHeight * (myBoxTotalOpen + myBoxTotalOntologies);
			
                
			myBox.x = this.x;
			myBox.y = this.y + this.bodyOffsetY + accumulatedOffsetY + (i+1)*restPerInput;
			myBox.width = boxWidth;
			myBox.height = boxHeight;			
			myBox.validate(); //Tell the box to self-validate

                        /**
                	console.log("BoxNº: "+i);
                        console.log("TotalH: "+myBoxTotalHeight);
                        console.log("X: " + myBox.x);
                        console.log("Y: " + myBox.y);
                        console.log("W: " + myBox.width);
                        console.log("H: " + myBox.height);
                        console.log("OffsetY (K): "+this.bodyOffsetY);
                        console.log("AccumulatedY: "+accumulatedOffsetY);
                        console.log("Rest per input (K): "+restPerInput);
                        console.log("----------");
                        **/
                       
			accumulatedOffsetY += myBoxTotalHeight;

			
		}
		

            
            
            
            	//For each of the inputs boxes count how many boxes has open and how many ontologies are going to be display
		var totalOutputs = this.outputs.length;
                
		var totalBoxes = 0;
                var totalOntologies = 0;
		for (var i=0; i<totalOutputs; i++){	
                    totalBoxes += this.outputs[i].totalOpen();
                    totalOntologies += this.outputs[i].totalOntologies();
		}
            
		totalRows = totalBoxes + totalOntologies;
                
		//Find out the height for each row
		var boxHeight = 0;
		if(totalBoxes!==0){
			boxHeight = (this.bodyHeight/totalRows) * 0.9;	
		}
		
                /**
                console.log("BH: " + this.bodyHeight);
                console.log("TI: " + totalInputs );
                console.log("TB: " + totalBoxes);
                console.log("TO: " + totalOntologies);
                console.log("TR: " + totalRows);
                **/
                
		//If the height is bigger than the maximum, limit the height
		if(boxHeight>CONECTIONBOX_MAX_ABSOLUTE_HEIGHT){
			boxHeight = CONECTIONBOX_MAX_ABSOLUTE_HEIGHT;
		}
            
                //console.log("correctedBH: "+ boxHeight);
		
		//Find out how much space left there is in the body of the piece
		//(Is it always a 10% of the body height)
		var rest = this.bodyHeight - boxHeight*totalRows;
                
                //console.log("Rest: " + rest);
                
		//Find out how much free space there is for each GROUP of boxes
		var restPerOutput = 0;
		if(totalOutputs!==0){
			restPerOutput = Math.floor(rest/(totalOutputs+1)); //<-- GROUP!
		}

                //console.log("rest/Input: " + restPerInput);
		
		//Find out the width for each input box
		var boxWidth = this.width * CONECTIONBOX_PERCENTAGE_WIDTH;
		
		//-- I AM the one to validate the box coordinates	
                //console.log("@@@@@@@  -- Sub-boxes");
		var accumulatedOffsetY = 0;
                var bodyOffsetX = this.width - boxWidth;
		for(var i=0; i<totalOutputs; i++){
		
			var myBox = this.outputs[i];
			var myBoxTotalOpen = myBox.totalOpen();
                        var myBoxTotalOntologies = myBox.totalOntologies();
			var myBoxTotalHeight = boxHeight * (myBoxTotalOpen + myBoxTotalOntologies);
			
                
			myBox.x = this.x + bodyOffsetX;
			myBox.y = this.y + this.bodyOffsetY + accumulatedOffsetY + (i+1)*restPerOutput;
			myBox.width = boxWidth;
			myBox.height = boxHeight;			
			myBox.validate(); //Tell the box to self-validate

                        /**
                	console.log("BoxNº: "+i);
                        console.log("TotalH: "+myBoxTotalHeight);
                        console.log("X: " + myBox.x);
                        console.log("Y: " + myBox.y);
                        console.log("W: " + myBox.width);
                        console.log("H: " + myBox.height);
                        console.log("OffsetY (K): "+this.bodyOffsetY);
                        console.log("AccumulatedY: "+accumulatedOffsetY);
                        console.log("Rest per input (K): "+restPerInput);
                        console.log("----------");
                        **/
                       
			accumulatedOffsetY += myBoxTotalHeight;

			
		}

            	
                //------FOOTER------
		//Calculate the output color box
		this.footerOutputColorBoxX = this.x + Math.floor(this.width/2) +  Math.floor(this.width * 0.05);
		this.footerOutputColorBoxY = this.y + this.frameHeight + this.titleHeight + this.bodyHeight + Math.floor(this.footerHeight * 0.1);
		this.footerOutputColorBoxWide = Math.floor(this.width*0.5) - Math.floor(this.width * 0.05) - Math.floor(this.footerHeight * 0.1);
		this.footerOutputColorBoxHeight = Math.floor(this.footerHeight * 0.8);		
		
                //Calculate the reminder WSDL title box
                this.footerWSDLOriginX = this.x + Math.floor(this.width/2) - Math.floor(this.width * 0.05) - this.footerOutputColorBoxWide;
                this.footerWSDLOriginY = this.footerOutputColorBoxY;
                this.footerWSDLOriginWide = this.footerOutputColorBoxWide;
                this.footerWSDLOriginHeight = this.footerOutputColorBoxHeight;
		
                //Calculate the footer font size
		this.footerFontSize = addjustFontSize(this.footerWSDLOriginWide, this.footerWSDLOriginHeight, this.origin);
		
		//-----FOOTER AGAIN-------
		this.footerY = this.y + this.frameHeight + this.titleHeight + this.bodyHeight;
		
		
                //-----SEMANTICS----------
                //validate only if the viewer is on
                if(this.togglerSemantics===true){
                    
                    for(var i=0; i<this.semanticBoxes.length; i++){
                        this.semanticBoxes[i].validate();
                        this.semanticBoxes[i].visible=true;

                    }
                
                
                }
                //Otherwise told it to become invisible
                else{
                    for(var i=0; i<this.semanticBoxes.length; i++){
                        this.semanticBoxes[i].visible=false;

                    }                    
                }
                
                
            
                //Workflow view
                var totalHeight = this.footerHeight+this.bodyOffsetY+this.bodyHeight;
                var totalTopics = this.getTopics()[0].length + this.getTopics()[1].length;
                var totalInputConnected = this.getPiecesInputConnected().length;
                this.pieceHeight = 0;
                if(totalTopics + totalInputConnected > 0){
                    this.pieceHeight = Math.floor(totalHeight*0.8 / (totalTopics + totalInputConnected));    
                }
                this.piecesScoresY = Math.floor(this.pieceHeight*totalTopics);
                this.finalHeight = Math.floor(totalHeight*0.2);
                this.finalY = this.y + (totalHeight - this.finalHeight);
            
                this.backgroundFontSize = addjustFontSize(this.width, this.height*0.8, "NO TOPICS/INPUTS");
                //this.pieceFontSize = addjustFontSize(this.footerWSDLOriginWide, this.footerWSDLOriginHeight, this.origin); //I will adjust these dinamically in the draw instead. Otherwise I have to create an array for each and it will be more inneficient
                this.idFontSize = addjustFontSize(this.width*0.1, this.pieceHeight, "0000");
                //this.pieceScoreFontSize = addjustFontSize(this.footerWSDLOriginWide, this.footerWSDLOriginHeight, this.origin);
                this.totalFontSize = addjustFontSize(this.width*0.5, this.finalHeight, "TOTAL:");
                this.totalScoreFontSize = addjustFontSize(this.width*0.25, this.finalHeight, this.accumulatedWorkflowScore);
            
            
            
            
            this.valid = true;
                
	}
	
	//This function deletes all incoming or outcoming links
	//From a piece. It will also delete the reference from
	//the piece at the other side of the link.
	//Returns a list with the ID of the deleted links.
	function deleteLinks(){
	
		var deletedList = [];
		
		//For every input box
		for(var i=0; i<this.inputs.length; i++){
		
			var myBox = this.inputs[i];
			var theOtherSide = null;
			
			//Get the complete list of boxes from that box
			var boxList = myBox.getBoxes();

			//For every of sub those boxes including myself
			for(var k=0; k<boxList.length; k++){
				
				var mySubBox = boxList[k];
				
				//For every link that sub box has
				for(var j=0; j<mySubBox.links.length;){
													  //This for DO NOT have j++
					//Get the link                    //We always delete j=0
					var myLink = mySubBox.links[j];   //The length gets -1 each time
					//Get the oposite box             //When the total is 0 the for ends
					theOtherSide = myLink.outputBox;
					
					//Tell the oposite box to delete this link
					theOtherSide.deleteLink(myLink.id);
					theOtherSide.validate();
					
					//Delete my own reference
					mySubBox.deleteLink(myLink.id);
					//Add id to the list
					deletedList.push(myLink.id);
					
				}	
				
			}
			
			
			
							
		}
		
		//For every output box
		for(var i=0; i<this.outputs.length; i++){
		
			var myBox = this.outputs[i];
			var theOtherSide = null;
			
			//Get the complete list of boxes from that box
			var boxList = myBox.getBoxes();

			//For every of sub those boxes including myself
			for(var k=0; k<boxList.length; k++){
				
				var mySubBox = boxList[k];
				
				//For every link that sub box has
				for(var j=0; j<mySubBox.links.length;){
													  //This for DO NOT have j++
					//Get the link                    //We always delete j=0
					var myLink = mySubBox.links[j];   //The length gets -1 each time
					//Get the oposite box             //When the total is 0 the for ends
					theOtherSide = myLink.inputBox;
					
					//Tell the oposite box to delete this link
					theOtherSide.deleteLink(myLink.id);
					theOtherSide.validate();
					
					//Delete my own reference
					mySubBox.deleteLink(myLink.id);
					//Add id to the list
					deletedList.push(myLink.id);
					
				}	
				
			}
			
			
			
							
		}		
		
		
                //For every operation link I have, delete the references as well.
                for(var i=0; i<this.outputLinks.length;){
                               
                    var theLink = this.outputLinks[i];
                    
                    this.deleteOperationLink(theLink.id);
                    deletedList.push(theLink.id);
                    //console.log("I:" + i);
                    //console.log("L:" + this.outputLinks.length);
                    //console.readline();
                    
                }
            
                for(var i=0; i<this.inputLinks.length;){
                    
                    var theLink = this.inputLinks[i];
                    
                    this.deleteOperationLink(theLink.id);
                    deletedList.push(theLink.id);
                    //console.log("I:" + i);
                    //console.log("L:" + this.outputLinks.length);
                    //console.readline();
                    
                }
                
            
                return deletedList;
	}
	
        //Look for the links in both output and input (can only be in one) and
        //delete the references at both sides. Return TRUE if done; FALSE if couldn't be found.
        function deleteOperationLink(id){
            
            var found = false;
            var deleted = false;
            
            console.log("ID = "+id);
            
            //For every operation link I have, look inside until found
            for(var i=0; i<this.outputLinks.length && found === false; i++){
                
                console.log("Looking in I: "+i+"/"+this.outputLinks.length);
                
                var theLink = this.outputLinks[i];
                
                console.log("Canidate ID = " + this.outputLinks[i].id);
                    
                //Check out if it is the link to be deleted
                if(this.outputLinks[i].id === id){
                    found = true;
                    var theOtherPiece = this.outputLinks[i].inputPiece;
                        
                    console.log("Match!");
                        
                    //Look inside the other piece and find the link ID in their inputs
                    for(var j=0; j<theOtherPiece.inputLinks.length && deleted === false; j++){
                        
                        var candidateLink = theOtherPiece.inputLinks[j];
                        
                        console.log("Looking in J: "+j+"/"+theOtherPiece.inputLinks.length);
                        console.log("Receiver ID = " + candidateLink.id);
                        
                        //When found
                        if(candidateLink.id === theLink.id){
                            
                            console.log("All green!");
                            
                            //Delete the link from the other piece
                            theOtherPiece.inputLinks.splice(j,1);
                            //Delete the link from myself
                            this.outputLinks.splice(i,1);
                            //Flag it as done
                            deleted = true;
                            
                            console.log("Final LI: " + this.outputLinks.length);
                            console.log("Final LJ: "+j+"/"+theOtherPiece.inputLinks.length);
                            
                            
                        }
                        
                    }
                            
                }
                    
            }
            
            //For every input link I have, look inside until found
            for(var i=0; i<this.inputLinks.length && found === false; i++){
                    
                var theLink = this.inputLinks[i];
                    
                //Check out if it is the link to be deleted
                if(this.inputLinks[i].id === id){
                    found = true;
                    var theOtherPiece = this.inputLinks[i].outputPiece;
                        
                    //Look inside the other piece and find the link ID in their inputs
                    for(var j=0; j<theOtherPiece.outputLinks.length && deleted === false; j++){
                        
                        var candidateLink = theOtherPiece.outputLinks[j];
                        
                        //When found
                        if(candidateLink.id === theLink.id){
                            
                            //Delete the link from the other piece
                            theOtherPiece.outputLinks.splice(j,1);
                            //Delete the link from myself
                            this.inputLinks.splice(i,1);
                            //Flag it as done
                            deleted = true;
                            
                        }
                        
                    }
                            
                }
                    
            }            
            
            
            return found;
            
            
        }
        
	//Command to turn off all the outputs
	//(not in use?)
	function turnOffAllOutputs(){
	
		for(var i=0; i<this.outputs.length; i++){
			this.outputs[i].turnOffSelect();
		}
		
	}
	
	//Command to turn on a single output
	function turnOnOutput(number){
		
		this.outputs[number].turnOnSelect();
		
	}
	
	//Set the height to the frame + title height
	function collapseSize(){
		
		var total = FRAME_PERCENTAGE_HEIGHT + TITLE_PERCENTAGE_HEIGHT + FOOTER_PERCENTAGE_HEIGHT;
		this.framePercentageHeight = Math.ceil(FRAME_PERCENTAGE_HEIGHT*100/total);
		this.titlePercentageHeight = Math.ceil(TITLE_PERCENTAGE_HEIGHT*100/total);
		this.footerPercentageHeight = Math.ceil(FOOTER_PERCENTAGE_HEIGHT*100/total);
		//this.height = this.frameHeight + this.titleHeight + this.footerHeight;
		
		//this.height = Math.floor(this.titleHeight*100/this.titlePercentageHeight);
	}
	
	//Save the current width and height
	function saveSize(){
		this.lastHeight = this.height;	
	}
	
	//Set the width and height to the last saved record.
	function restoreSize(){
		this.height = this.titleHeight*100/TITLE_PERCENTAGE_HEIGHT;
		this.framePercentageHeight = FRAME_PERCENTAGE_HEIGHT;
		this.titlePercentageHeight = TITLE_PERCENTAGE_HEIGHT;
		this.footerPercentageHeight = FOOTER_PERCENTAGE_HEIGHT;
	}
	
	//Changes the collapse to not(current status)
	function swapCollapseStatus(){
		this.collapsed = !(this.collapsed);
                
                for(var i=0; i<this.inputs.length; i++){
                    this.inputs[i].toggleSemantic();
                }
            
                for(var i=0; i<this.outputs.length; i++){
                    this.outputs[i].toggleSemantic();
                }
                
	}
	
	//Add inputs to the piece
	//return the Box added
	function addInput(title, elementType){
		var newBox = new ConectionBox(0, 0, 0, 0, 'string','input',title, this, elementType);
		this.inputs.push(newBox);
		return newBox;
	}
	
	//Add output to the piece
	//return the Box added
	function addOutput(title, elementType){
		var newBox = new ConectionBox(0, 0, 0, 0, 'string','output',title, this, elementType);
		this.outputs.push(newBox);
		return newBox;
	}
  
	//Draws this shape to a given context
	function draw(context){
		
                if(this.workflowView === false){
                    //----FRAME----
                    {
                    //Draw the frame box and it border.
                    context.fillStyle =  FRAME_BACKGROUND_COLOR;
                    context.fillRect(this.x,this.y,this.width,this.frameHeight);

                    context.lineWidth = FRAME_BORDER;
                    context.strokeStyle = FRAME_BORDER_COLOR;
                    context.strokeRect(this.x,this.y,this.width,this.frameHeight);

                    //--Draw the collapse botom
                    context.fillStyle = FRAME_COLLAPSER_COLOR;
                    context.fillRect(this.frameCollapseX, this.frameCollapseY, this.frameCollapseWidth, this.frameCollapseHeight);

                    //--Draw the eraser botom
                    context.fillStyle = FRAME_ERASER_COLOR;
                    context.fillRect(this.frameCloseX, this.y+this.frameHeight*0.1, this.frameHeight*0.9, this.frameHeight*0.9);

                    //--Draw the full botom (Depecrated)
                    //context.fillStyle = FULL_CANVAS_COLOR;
                    //context.fillRect(this.frameFullX, this.frameFullY, this.frameFullWidth, this.frameFullHeight);

                    //--Draw the swap botom (Depecrated)
                    //context.fillStyle = SWAP_LAYER_BOX_COLOR;
                    //context.fillRect(this.frameSwapX, this.frameSwapY, this.frameSwapWidth, this.frameSwapHeight);

                    //--Draw the toggler input botom
                    context.fillStyle = this.frameTogglerSemanticColor;
                    context.fillRect(this.frameTogglerSemanticX, this.frameTogglerSemanticY, this.frameTogglerSemanticWidth, this.frameTogglerSemanticHeight);

                    //--Draw the toggler output botom
                    //context.fillStyle = TOGGLER_SEMACTIC_VIEWER_BOX_COLOR;
                    //context.fillRect(this.frameTogglerOutputX, this.frameTogglerOutputY, this.frameTogglerOutputWidth, this.frameTogglerOutputHeight);
                    }



                    //----TITLE----
                    {
                    //Draw the title box and its border
                    context.fillStyle = TITLE_BACKGROUND_COLOR;
                    context.fillRect(this.x,this.y+this.frameHeight,this.width,this.titleHeight);

                    context.strokeStyle = TITLE_BORDER_COLOR;
                    context.lineWidth = TITLE_BORDER_WIDTH;
                    context.strokeRect(this.x,this.y+this.frameHeight,this.width,this.titleHeight);

                    //Draw the title text
                    context.fillStyle = TITLE_FONT_COLOR;
                    context.textAlign = 'center';
                    context.font= this.titleFontSize+"px "+ TITLE_FONT;
                    context.fillText(this.title, this.width/2 + this.x, this.titleHeight/2 + this.frameHeight + this.y + this.titleFontSize/4); //I don't know why it alight with /4 instead of /2 :-/

                    //Draw the conectors if not invisible
                    if(this.conectorInvisible===false){
                        context.strokeStyle = TITLE_BORDER_COLOR;
                        context.lineWidth = TITLE_BORDER_WIDTH;

                        context.strokeRect(this.x-this.width*0.05,this.y+this.frameHeight,this.width*0.05,this.titleHeight);
                        context.strokeRect(this.x+this.width,this.y+this.frameHeight,this.width*0.05,this.titleHeight);

                    }

                    //Draw your compatibility if asked
                    if(this.checkingLink===true){

                            var gradientColor = "";

                            switch(this.candidateCompatible){

                                    case 0:	
                                            gradientColor = COMP_FULL;
                                            break;
                                    case 1:		
                                            gradientColor = COMP_GOOD;
                                            break;                                        
                                    case 2:		
                                            gradientColor = COMP_UNKONWN;
                                            break;
                                    case 3:		
                                            gradientColor = COMP_NON;
                                            break;
                                    default:
                                            gradientColor = "black";
                                            break;
                            }


                            context.fillStyle = gradientColor;
                            context.fillRect(this.x-this.width*0.05,this.y+this.frameHeight,this.width*0.05,this.titleHeight);
                            context.strokeStyle = this.borderColor;
                            context.lineWidth = this.borderWidth;
                            context.strokeRect(this.x-this.width*0.05,this.y+this.frameHeight,this.width*0.05,this.titleHeight);
                    }

                    //console.log("A: "+this.outputLinks.length);

                    //Draw the links which come out of you
                    for(var i=0; i<this.outputLinks.length ; i++){
                        this.outputLinks[i].draw(context);

                    }

                    }


                    //----BODY----
                    //Draw the body if not collapsed
                    if(this.collapsed === false){

                            //Draw the background
                            context.fillStyle = this.fill;
                            context.fillRect(this.x, this.y+this.bodyOffsetY, this.width, this.bodyHeight);

                            //Draw the input boxes
                            for(var i=0; i<this.inputs.length; i++){
                                    this.inputs[i].draw(context);
                            }


                            //Draw the output boxes
                            for(var i=0; i<this.outputs.length; i++){
                                    this.outputs[i].draw(context);
                            }


                    }

                    //If the body is collapse we won't draw it
                    //but we still need to draw the links from the corner
                    //for each output
                    else{
                            for(var i=0; i<this.outputs.length; i++){
                                    var myOutput = this.outputs[i];

                                    var myOutputBoxes = myOutput.getBoxes();

                                    for(var j=0; j<myOutputBoxes.length; j++){	

                                            for(var k=0; k<myOutputBoxes[j].links.length; k++){

                                                    var myLink = myOutputBoxes[j].links[k];		
                                                    myLink.draw(context);

                                            }

                                    }
                            }			
                    }



                    //----FOOTER----
                    //Draw the footer box and footer border
                    {
                    context.fillStyle = TITLE_BACKGROUND_COLOR;
                    context.fillRect(this.x,this.footerY,this.width,this.footerHeight);

                    context.strokeStyle = TITLE_BORDER_COLOR;
                    context.lineWidth = TITLE_BORDER_WIDTH;
                    context.strokeRect(this.x,this.footerY,this.width,this.footerHeight);

                    //Draw the footer output color and its border		
                    context.fillStyle = this.fill;
                    context.fillRect(this.footerOutputColorBoxX,this.footerOutputColorBoxY,this.footerOutputColorBoxWide, this.footerOutputColorBoxHeight);

                    context.strokeStyle = TITLE_BORDER_COLOR;
                    context.lineWidth = TITLE_BORDER_WIDTH;
                    context.strokeRect(this.footerOutputColorBoxX,this.footerOutputColorBoxY,this.footerOutputColorBoxWide, this.footerOutputColorBoxHeight);

                    //Draw the footer WSDL box reminder and its border
                    context.fillStyle = WSDL_ORIGIN_REMINDER;
                    context.fillRect(this.footerWSDLOriginX,this.footerWSDLOriginY,this.footerWSDLOriginWide, this.footerWSDLOriginHeight);

                    context.strokeStyle = TITLE_BORDER_COLOR;
                    context.lineWidth = TITLE_BORDER_WIDTH;
                    context.strokeRect(this.footerWSDLOriginX,this.footerWSDLOriginY,this.footerWSDLOriginWide, this.footerWSDLOriginHeight);

                    //Draw the text inside the WSDL box reminder                
                    context.fillStyle = WSDL_ORIGIN_REMINDER_FONT_COLOR;
                    context.textAlign = 'center';
                    context.font= this.footerFontSize+"px "+ TITLE_FONT;
                    context.fillText(this.origin, this.footerWSDLOriginWide/2 + this.footerWSDLOriginX, this.footerWSDLOriginHeight/2 + this.footerWSDLOriginY + this.footerFontSize/4);
                    }

                    //-----SEMANTICS----------
                    //Draw only if the viewer is on
                    if(this.togglerSemantics===true){

                        for(var i=0; i<this.semanticBoxes.length; i++){
                            this.semanticBoxes[i].draw(context);

                        }

                    }

                }
                else{

                    //var accumulatedOffsetY = 0;

                    //Draw the background
                    context.fillStyle =  WORKFLOW_BACKGROUND;
                    context.fillRect(this.x,this.y,this.width,this.footerHeight+this.bodyOffsetY+this.bodyHeight);
                    context.lineWidth = TITLE_BORDER_WIDTH;
                    context.strokeStyle = FRAME_BORDER_COLOR;
                    context.strokeRect(this.x,this.y,this.width,this.footerHeight+this.bodyOffsetY+this.bodyHeight);
                    
                    //Draw the title text
                    context.fillStyle = "white";
                    context.textAlign = 'center';
                    context.font= this.backgroundFontSize+"px "+ TITLE_FONT;
                    context.fillText("NO TOPICS/INPUTS", this.x + this.width/2, this.y + (this.footerHeight+this.bodyOffsetY+this.bodyHeight)/2 + this.backgroundFontSize/4); 
                    
                    //Draw the topic boxes
                    var topics = this.getTopics();
                    topics = topics[0].concat(topics[1]);
                    for(var i=0; i<topics.length; i++){
                        
                        //Draw the square for the topic name
                        context.fillStyle =  "black";
                        context.fillRect(this.x,this.y+(i*this.pieceHeight),this.width*0.9,this.pieceHeight);                        
                        context.lineWidth = TITLE_BORDER_WIDTH;
                        context.strokeStyle = "orange";                        
                        context.strokeRect(this.x,this.y+(i*this.pieceHeight),this.width*0.9,this.pieceHeight);
                        
                        //Draw the topic name text
                        context.fillStyle = "white";
                        context.textAlign = 'center';
                        this.pieceFontSize = addjustFontSize(this.width*0.9,this.pieceHeight,topics[i].name);
                        context.font= this.pieceFontSize+"px "+ TITLE_FONT;
                        context.fillText(topics[i].name, this.x + this.width*0.9/2, this.y + (i*this.pieceHeight) + this.pieceHeight/2 + this.pieceFontSize/2);
                        
                        //Draw the square for the ID
                        context.fillStyle =  "black";
                        context.fillRect(this.x+this.width*0.9,this.y+(i*this.pieceHeight),this.width*0.1,this.pieceHeight);                        
                        context.lineWidth = TITLE_BORDER_WIDTH;
                        context.strokeStyle = "orange";                        
                        context.strokeRect(this.x+this.width*0.9,this.y+(i*this.pieceHeight),this.width*0.1,this.pieceHeight);                        
                        
                        //Draw the topic ID text
                        context.fillStyle = "white";
                        context.textAlign = 'center';
                        this.pieceFontSize = addjustFontSize(this.width*0.1,this.pieceHeight,topics[i].id);
                        context.font= this.pieceFontSize+"px "+ TITLE_FONT;
                        context.fillText(topics[i].id, this.x + this.width*0.9 + this.width*0.1/2, this.y + (i*this.pieceHeight) + this.pieceHeight/2 + this.pieceFontSize/2);
                        
                    }
                    
                    //Draw the pieces boxes
                    var inputConnected = this.getPiecesInputConnected();
                    for(var i=0; i<inputConnected.length; i++){
                        
                        //Draw the square for the operation title
                        context.fillStyle =  "orange";
                        context.fillRect(this.x,this.y+this.piecesScoresY+(i*this.pieceHeight),this.width*0.7,this.pieceHeight);                        
                        context.lineWidth = TITLE_BORDER_WIDTH;
                        context.strokeStyle = "black";                        
                        context.strokeRect(this.x,this.y+this.piecesScoresY+(i*this.pieceHeight),this.width*0.7,this.pieceHeight);                        
                        
                        //Draw the piece title text
                        context.fillStyle = "black";
                        context.textAlign = 'center';
                        this.pieceFontSize = addjustFontSize(this.width*0.7,this.pieceHeight,inputConnected[i].title);
                        context.font= this.pieceFontSize+"px "+ TITLE_FONT;
                        context.fillText(inputConnected[i].title, this.x + this.width*0.7/2, this.y + this.piecesScoresY + (i*this.pieceHeight) + this.pieceHeight/2 + this.pieceFontSize/2);
                                        
                        //Draw the square with the score
                        context.fillStyle =  "black";
                        context.fillRect(this.x+this.width*0.7,this.y+this.piecesScoresY+(i*this.pieceHeight),this.width*0.3,this.pieceHeight);                        
                        context.lineWidth = TITLE_BORDER_WIDTH;
                        context.strokeStyle = "orange";                        
                        context.strokeRect(this.x+this.width*0.7,this.y+this.piecesScoresY+(i*this.pieceHeight),this.width*0.3,this.pieceHeight);                        
                        
                        //Draw the piece workflow score text
                        context.fillStyle = "white";
                        context.textAlign = 'center';
                        this.pieceFontSize = addjustFontSize(this.width*0.3,this.pieceHeight,this.operationsWorkflowScores[i]);
                        context.font= this.pieceFontSize+"px "+ TITLE_FONT;
                        context.fillText(this.operationsWorkflowScores[i], this.x + this.width*0.7 + this.width*0.3/2, this.y + this.piecesScoresY + (i*this.pieceHeight) + this.pieceHeight/2 + this.pieceFontSize/2);
                        
                    }
                    //Draw the final box
                    
                    //Draw the FINAL box for the text (total?)
                    context.fillStyle = '#3365DA';
                    context.fillRect(this.x,this.finalY,this.width*0.5,this.finalHeight);
                    context.lineWidth = FRAME_BORDER;
                    context.strokeStyle = "black";
                    context.strokeRect(this.x,this.finalY,this.width*0.5,this.finalHeight);
                
                    //Draw the piece workflow TOTAL text
                    context.fillStyle = "white";
                    context.textAlign = 'center';
                    context.font= this.totalFontSize+"px "+ TITLE_FONT;
                    context.fillText("TOTAL:", this.x + this.width*0.5/2, this.finalY + this.finalHeight/2 + this.totalFontSize/2);
                
                    //Draw the piece score
                    context.fillStyle =  "black";
                    context.fillRect(this.x+this.width*0.5,this.finalY,this.width*0.25,this.finalHeight);
                    context.lineWidth = FRAME_BORDER;
                    context.strokeStyle = '#3365DA';
                    context.strokeRect(this.x+this.width*0.5,this.finalY,this.width*0.25,this.finalHeight);                    
                    
                    //Draw the piece workflow piece score text
                    context.fillStyle = "white";
                    context.textAlign = 'center';
                    context.font= this.totalScoreFontSize+"px "+ TITLE_FONT;
                    context.fillText(Math.round(this.workflowScore * 100)/100, this.x + this.width*0.5 + this.width*0.25/2, this.finalY + this.finalHeight/2 + this.totalScoreFontSize/2);
                    
                    //Draw the accumulated score
                    context.fillStyle =  "black";
                    context.fillRect(this.x+this.width*0.75,this.finalY,this.width*0.25,this.finalHeight);
                    context.lineWidth = FRAME_BORDER;
                    context.strokeStyle = '#3365DA';
                    context.strokeRect(this.x+this.width*0.75,this.finalY,this.width*0.25,this.finalHeight);                    
                    
                    //Draw the piece workflow piece score text
                    context.fillStyle = "white";
                    context.textAlign = 'center';
                    context.font= this.totalScoreFontSize+"px "+ TITLE_FONT;
                    context.fillText(Math.round(this.accumulatedWorkflowScore * 100)/100, this.x + this.width*0.75 + this.width*0.25/2, this.finalY + this.finalHeight/2 + this.totalScoreFontSize/2);

                    //Draw the links which come out of you
                    for(var i=0; i<this.outputLinks.length ; i++){
                        this.outputLinks[i].draw(context);

                    }
                
                }
                
                if(this.massSelected === true){
                    
                    context.fillStyle =  PIECE_MASS_SELECTION_COLOR;
                    context.fillRect(this.x,this.y,this.width,this.footerHeight+this.bodyOffsetY+this.bodyHeight);
                
                }
                
                
	}
	
	// Determine if a point is inside the box's bounds
	function contains(X, Y) {
		return  (this.x <= X) && (X <= this.x + this.width) &&
				(this.y <= Y) && (Y <= this.y + this.height);
	}
	
	//Determine if a point is inside the Close Buttom
	function closeClick(X,Y){
		
		return  (this.frameCloseX <= X) && (X <= this.frameCloseX + this.frameCloseWidth) &&
				(this.frameCloseY <= Y) && (Y <= this.frameCloseY + this.frameCloseHeight);
	
	}

	//Determine if a point is inside the Collapse Buttom
	function collapseClick(X,Y){
		
		return  (this.frameCollapseX <= X) && (X <= this.frameCollapseX + this.frameCollapseWidth) &&
				(this.frameCollapseY <= Y) && (Y <= this.frameCollapseY + this.frameCollapseHeight);
	
	}

	//Changes the semantics display to not(current status)
	function swapSemanticStatus(){
		this.togglerSemantics = !(this.togglerSemantics);
                this.validate();
	}        
             
    	//Determine if a point is inside the Semantic Buttom
	function semanticClick(X,Y){
		
		return  (this.frameTogglerSemanticX <= X) && (X <= this.frameTogglerSemanticX + this.frameTogglerSemanticWidth) &&
				(this.frameTogglerSemanticY <= Y) && (Y <= this.frameTogglerSemanticY + this.frameTogglerSemanticHeight);
	
	}
    	
	//Determine if a point is inside the Color Box of the footer
	function colorBoxClick(X,Y){
		
		return  (this.footerOutputColorBoxX <= X) && (X <= this.footerOutputColorBoxX + this.footerOutputColorBoxWide) &&
				(this.footerOutputColorBoxY <= Y) && (Y <= this.footerOutputColorBoxY + this.footerOutputColorBoxHeight);
	
	}
		
	//Determine if a point is inside any of the outputs connections
	//returns the outputBox if founded, null otherwise
	function inOutConnection(X,Y){
		
		var boxClicked = null;
		
		for(var i=0; i<this.outputs.length && boxClicked===null; i++){
					
			var boxClicked = this.outputs[i].clickedBox(X,Y);

		}
		
		return boxClicked;

	}
	
	//Determine if a point is inside any of the inputs connections
	//returns the inputBox if founded, null otherwise
	function inInConnection(X,Y){
		
		var boxClicked = null;
		
		for(var i=0; i<this.inputs.length && boxClicked===null; i++){
					
			var boxClicked = this.inputs[i].clickedBox(X,Y);

		}
		
		return boxClicked;

	}
 
}

//Workshop is the director of the canvas where we paint graphics.
//It keeps track of everything that is draw on it and if we selected
//something, if we are dragging something and everything else.
function Workshop(canvas, ontology) {
	
	//-Attributes
	this.canvas = canvas;
	this.ontology = ontology;
	
	//--Properties
	
	this.width = canvas.width; //Are these two in use?
	this.height = canvas.height;
	this.ctx = canvas.getContext('2d');
	this.currentID = 0; //I'm guessing that this is a 8Bytes integer, so this limit
						//the numbers of pieces and links to 64.000 more or less
	
	//--Tracking
        this.auxiliarPiece = null; //This keep track of an auxiliar piece which is naver drawn.
	this.shapes = []; //Contains all the pieces
	this.links = []; //Contains all the links
        this.operationLinks = []; //Contains all the operation links
	this.zoomLevel = 0;
	this.selectedOutput = null; //Contain the last selected output box
	this.selection = null; //Contain the last selected piece
        this.massSelection = []; //Contain a bunch of pieces which have been selected at the same time
	this.selectionHandles = []; //Contain the temporarily handlers for resizing.
	this.expectResize = -1; // New, will save the # of the selection handle if the mouse is over one.
							// This is a chart with the handlers IDs
							// 0  1  2
							// 3     4
							// 5  6  7


	this.dragoffx = 0; // These two keep track of where within the box
	this.dragoffy = 0; // it has been clicked; so we move from that point
					   // and not from the left top corner.
					   					   
	this.cutterStartX = 0; //This saves the coordinates of the cutter line
	this.cutterStartY = 0;
	this.cutterEndX = 0;
	this.cutterEndY = 0;
	
	this.colorX = 0;      //This saves the coordinates for the coolor chooser
	this.colorY = 0;
	this.colorAngle = 0;
	this.colorStartX = 0;
	this.colorStartY = 0;

        this.currentMouseX = 0;
        this.currentMouseY = 0;
        this.previousMouseX = 0;
        this.previousMouseY = 0;
        
        this.startMassSelectionX = 0;
        this.startMassSelectionY = 0;
        this.stopMassSelectionX = 0;
        this.stopMassSelectionY = 0;

	//--Flags with the internal state
	this.valid = true; // when set to false, the canvas will redraw everything
	this.dragging = false; // Keep track of when we are dragging
	this.resizeDrag = false; //Keep track of when we are resizing 
	this.readyToConnect = false; //Keep track if we have select an output
	this.creatingCutter = false; //Keep track if we are drawing a cutter on screen
	this.choosingColor = false; //Keep track if we are choosing an output color
	this.pieceColorChoosen = -1; //Which piece are we changing the color
        this.quickMove = false; //When you press MAY and an arrow, the camera move faster
        this.massSelecting = false;
        this.massDragging = false;
        this.controlPress = false;

	//--Events
	//In the events "this" means the canvas where we are adding the events
	//so we need a reference to the Workshop object.
	var myWorkshop = this;

	//Fixes a problem where double clicking causes text to get selected on the canvas
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
	//canvas.addEventListener('resize', function(e){myWorkshop.valid=false;},true); //I can't make this work! :-(
	
	//Prevents ALT-Menu if right button is clicked inside the canvas
	canvas.oncontextmenu = function() {return false;} ; 
	
	//canvas.addEventListener('oncontextmenu',function(e){e.preventDefault();return false;}, false);

	//If the mouse is clicked
	canvas.addEventListener('mousedown', function(e) {
		
		var mouse = myWorkshop.getMouse(e);
		var mx = mouse.x;
		var my = mouse.y;
		var button = e.which;
		var shapes = myWorkshop.shapes;
		var l = shapes.length;
		var found = false;
	

        
		//If you click the left button
		if(button===1){

                        myWorkshop.previousMouseX = myWorkshop.currentMouseX;
                        myWorkshop.previousMouseY = myWorkshop.currentMouseY;
                        myWorkshop.currentMouseX = mx;
                        myWorkshop.currentMouseY = my;
                        
                        myWorkshop.startMassSelectionX = mx;
                        myWorkshop.startMassSelectionY = my;
                
                
			//Check first if we are hovering a selection box
			if (myWorkshop.expectResize !== -1) {
				//If we do we are ready to resize the piece.
				myWorkshop.resizeDrag = true;
                                //myWorkshop.massSelecting = false;
			}
			
			//If we are not over a selection box:
			else{			
				
				//For every piece, check if we clicked inside that piece.
				//The piece which is at the end of the list is the one
				//which is on top; so we check from last to first.
				for (var i = l-1; i >= 0 && found===false; i--) {
					
                                        //We found a Piece; lets see deeper where the click falls
					if (myWorkshop.shapes[i].contains(mx, my)) {
						
						var mySelection = myWorkshop.shapes[i];
						found = true;
						
						//Checkout where the box was clicked
						//or else it will be move from the left top corner
						myWorkshop.dragoffx = mx - mySelection.x;
						myWorkshop.dragoffy = my - mySelection.y;
						
						
						//If we clicked inside the piece many things can happen
						//---We want to delete it
						//---We want to collapse it (and move it)
						//---We click on an output box (and move it)
						//---We click on an input box
						//---If nothing else we want to move it
						
						//Click on delete
						if(mySelection.closeClick(mx,my)){

							myWorkshop.deleteShapeByIndex(i);
							
						}
						
						//Click on collapse
						else if(mySelection.collapseClick(mx,my)){
							
							//If it is not collapse, then collapse it
							if(mySelection.collapsed===false){
								mySelection.saveSize();
								mySelection.collapseSize();
							}
							//If it was already collapsed, restore it
							else{
								mySelection.restoreSize();
							}
							
							//Update the piece information
							mySelection.swapCollapseStatus();
							mySelection.validate();
							
							
							//Turn off the inputs lights?
							//Technically you still have the box selected
							//myWorkshop.turnOffGuideLights()

							
							//You still have the option of move the piece
							this.style.cursor='move';
							myWorkshop.selection = mySelection;
							myWorkshop.dragging = true;
							myWorkshop.valid = false;
							
						}
                                            
                                                //Click on semantics toggler
                                                else if(mySelection.semanticClick(mx,my)){
                                                    
                                                    mySelection.swapSemanticStatus();
                                                    mySelection.validate();
                                                    myWorkshop.valid = false;
                                                    
                                                }
						
						//Click on an output
						else if(mySelection.inOutConnection(mx,my)!==null){
							
							//Which output
							var outBox = mySelection.inOutConnection(mx,my);
							
                                                        //Print the semantics
                                                        
                                                        //console.log(outBox.toString());
                                                        //console.log(outBox.type);
                                                        
                                                        
							//Turn off selection for previous output
							if(myWorkshop.selectedOutput!==null){
								myWorkshop.selectedOutput.turnOffSelect();
								myWorkshop.selectedOutput.validate();
							}
							
							//Set the current selected output and turn it on
							myWorkshop.selectedOutput=outBox;
							outBox.turnOnSelect();
							myWorkshop.selectedOutput.validate();

							//Everything is ready to link
							myWorkshop.readyToConnect = true;
							
							//Now tell to every input box (maybe skip cycles)
							//To check compatibility with this new outputBox
							//var inputBoxes = [];
							
							//For every piece in the workshop
							for(j=0;j<myWorkshop.shapes.length; j++){
								
								//If connecting with this piece will form
								//a cycle skip it?
								//What should we do? Mark those links
								//as imposible or not highlight them at all?
								if(true){
									
									var myShape = myWorkshop.shapes[j];
									var allInputs = myShape.getInputBoxes();
									
									for(k=0; k<allInputs.length; k++){
									
										var code = getCompatible(myWorkshop.selectedOutput,allInputs[k]);
										allInputs[k].checkingLink = true;
										allInputs[k].candidateCompatible = code;
										allInputs[k].validate();
										
									}
									
								}
							
							}
                                                    
                                                        //For every piece in the workshop
                                                        //Check if the selected piece is compatible
                                                        for(j=0;j<myWorkshop.shapes.length; j++){
                                                            
                                                            	//If connecting with this piece will form
								//a cycle skip it?
								//What should we do? Mark those links
								//as imposible or not highlight them at all?
								if(true){
                                                                    
                                                                    var myShape = myWorkshop.shapes[j];
                                                                    
                                                                    if(myShape.id!==mySelection.id){
                                                                        
                                                                        var code = getOperationCompatible(mySelection, myShape);
                                                                        myShape.checkingLink = true;
                                                                        myShape.candidateCompatible = code;
                                                                        myShape.validate();
                                                                        
                                                                    }
                                                                    
                                                                }
                                                            
                                                        }
							
							
							//Now you can still move the piece arround
							this.style.cursor='move';
							myWorkshop.selection = mySelection;
							myWorkshop.dragging = true;
							myWorkshop.valid = false;
						}
						//Click on an input box and previously selected outbox
						else if(mySelection.inInConnection(mx,my)!==null && myWorkshop.readyToConnect===true){
							
							//Get the input box
							var inBox = mySelection.inInConnection(mx,my);
							
                                                        //Print the semantics
                                                        //console.log(inBox.toString());
                                                        
							//You are not allow to link an output with an input
							//If they belong to the same piece or if they make a cycle
							if(inBox.parent!==myWorkshop.selectedOutput.parent){
									
									
								//Creates the new link
								var linkColor = "";
																					
								switch(inBox.candidateCompatible){
									
									case 0:	
										linkColor = LINK_FULL;
										break;
									case 1:		
										linkColor = LINK_GOOD;
										break;                                                                                  
									case 2:		
										linkColor = LINK_UNKONWN;
										break;
									case 3:		
										linkColor = LINK_NON;
										break;
									default:
										linkColor = "black";
										break;
								}							
								
								var newLink = new Link(myWorkshop.currentID, myWorkshop.selectedOutput, inBox, linkColor);
								myWorkshop.currentID += 1;
								
                                    
                                                                //Check if the new link created a new operation link
                                                                //If the two pieces are not connected; create the link
                                                                if(myWorkshop.selectedOutput.parent.connectWithPiece(inBox.parent) === false){
                                                                    
                                                                    var operationLinkColor = "";

                                                                    switch(inBox.parent.candidateCompatible){

                                                                            case 0:	
                                                                                    operationLinkColor = LINK_FULL;
                                                                                    break;
                                                                            case 1:		
                                                                                    operationLinkColor = LINK_GOOD;
                                                                                    break;                                                                                  
                                                                            case 2:		
                                                                                    operationLinkColor = LINK_UNKONWN;
                                                                                    break;
                                                                            case 3:		
                                                                                    operationLinkColor = LINK_NON;
                                                                                    break;
                                                                            default:
                                                                                    operationLinkColor = "black";
                                                                                    break;
                                                                    }

                                                                    //console.log("-2-" + inBox.parent.title);
                                                                    //console.log(myWorkshop.selectedOutput.parent.title);

                                                                    var newOperationLink = new OperationLink(myWorkshop.currentID, myWorkshop.selectedOutput.parent, inBox.parent, operationLinkColor);
                                                                    myWorkshop.currentID += 1;

                                                                    //console.log(newOperationLink.toString());

                                                                    //Add the link to the Workshop, the input and the output
                                                                    myWorkshop.addOperationLink(newOperationLink);                                                
                                                                    myWorkshop.selectedOutput.parent.addOutputLink(newOperationLink);
                                                                    inBox.parent.addInputLink(newOperationLink);
                                        
                                                                    //console.log("-3-" + inBox.parent.title);
                                                                    //console.log(myWorkshop.selectedOutput.parent.title);
                                        
                                                                    //Flag the input and output as linked
                                                                    inBox.parent.linked = true;
                                                                    myWorkshop.selectedOutput.parent.linked = true;
                                                                    
                                                                    //Update the drawing info
                                                                    
                                                                    //console.log("-4-" + inBox.parent.title);
                                                                    //console.log(myWorkshop.selectedOutput.parent.title);
                                                                    
                                                                    inBox.parent.validate();
                                                                    myWorkshop.selectedOutput.parent.validate();
                                                                    
                                                                }                                    
                                    
								//Add the link to the Workshop, the input and the output
								myWorkshop.addLink(newLink);
								inBox.addLink(newLink);
								myWorkshop.selectedOutput.addLink(newLink);

								//Flag the input and output as linked
								myWorkshop.selectedOutput.turnOnLink();
								inBox.turnOnLink();
									
                                                                //console.log("--" + inBox.parent.title);
                                                                //console.log(myWorkshop.selectedOutput.parent.title);
        
        							//Unselect the output
								myWorkshop.selectedOutput.turnOffSelect();
        
                                                                //Update the drawing info
								myWorkshop.selectedOutput.validate();
								inBox.validate();
										
								//Turn off the inputs lights
								myWorkshop.turnOffGuideLights();
									
								//Come back to default state
								myWorkshop.selectedOutput = null;
								myWorkshop.selection = null;
								myWorkshop.readyToConnect = false;
								myWorkshop.dragging = false;
								myWorkshop.valid = false;
								
							}
							else{
								console.log("Can't link in cycles");
							}
						}
						
                                                //Click on a input box with no previous selection (print on console)
                                                else if(mySelection.inInConnection(mx,my)!==null && myWorkshop.readyToConnect===false){
                                                    
                                                    	//Get the input box
							inBox = mySelection.inInConnection(mx,my);
							
                                                        //Print the semantics
                                                        console.log(inBox.toString());
 
                                                }
                            
                                                //Click on the footer color box
						else if(mySelection.colorBoxClick(mx,my)){
							myWorkshop.choosingColor = true;
							myWorkshop.pieceColorChoosen = i;
							myWorkshop.valid = false;
							myWorkshop.colorStartX = mx;
							myWorkshop.colorStartY = my;
						}
						
						//Default, drag it around.
						else{
							//If we clicked inside the piece
							//Then we had selected that piece
							//We are ready to drag
							//And we must redraw the canvas.
							this.style.cursor='move';
							myWorkshop.selection = mySelection;
							myWorkshop.dragging = true;
							myWorkshop.valid = false;
							
							
						}
						
						
					}
				}
			
				//If we fail to click over anything
				if(found===false){
				
					//Check if there was any piece selected
					if(myWorkshop.selection){
						//If it was; unselect it
						myWorkshop.selection = null;
						
					}
					//Check if there was any output selected
					if(myWorkshop.selectedOutput){
						
						
						//Turn off the inputs lights
						myWorkshop.turnOffGuideLights();
	
						//Unselect output box and validate
						myWorkshop.selectedOutput.turnOffSelect();
						myWorkshop.selectedOutput.validate();
						myWorkshop.selectedOutput = null;
						myWorkshop.readyToConnect = false;
						
						
					}
					
					//Now you might be selecting many pieces
                                        myWorkshop.massSelection = [];
                                        myWorkshop.massSelecting = true;
                                        
                                        console.log("Mass selecting START");
                        
                                        //Update the workshop.
					myWorkshop.valid = false;
				
				}
                                else{
                                    //If we click in a piece

                                    //If that piece was inside the previous mass selection nothing happens
                                    //if it was outside, delete the mass selection
                                    var found = false;
                                    for(var i=0; i<myWorkshop.massSelection.length && found===false; i++){
                                        
                                        if(myWorkshop.selection !== null){
                                        
                                            if(myWorkshop.selection.id === myWorkshop.massSelection[i].id){
                                                found = true;
                                            }
                                
                                        }
                                
                                        
                                    }
                                    if(found === false){
                                    
                                        for(var i=0; i<myWorkshop.massSelection.length; i++){
                                            
                                            myWorkshop.massSelection[i].massSelected = false;
                                            
                                        }
                            
                                        myWorkshop.massSelection = [];
                                        
                                    }
                                    
                                }

			}
		
		}
		else if(button === 2){
			
			console.log("Center mouse");
			myWorkshop.swapWorkflowView();
                        console.log("Going to workflow view");
			
		}
		else if(button === 3){
			
			console.log("Right mouse");
			myWorkshop.creatingCutter = true;
			myWorkshop.cutterStartX = mx;
			myWorkshop.cutterStartY = my;
			
		}
		
		else if(button === 4){
			
			console.log("Side mouse A");
		}
		
		else if(button === 5){
			
			console.log("Side mouse B");
		}
		else{
			console.log("How many buttons do you have!?");
			
		}

	}, true);
	
	//When the mouse moves
	canvas.addEventListener('mousemove', function(e) {

		//Get the mouse coordinates.
		var mouse = myWorkshop.getMouse(e);
		var mx = mouse.x;
		var my = mouse.y;
                myWorkshop.currentMouseX = mx;
                myWorkshop.currentMouseY = my;
		
                myWorkshop.stopMassSelectionX = mx;
                myWorkshop.stopMassSelectionY = my;
                
		//In we have selected something, this could happen:
		//-We are dragging the piece
		//-We are resizing the piece
		//-We are doing nothing but hovering the mouse over the handlers
		if(myWorkshop.selection!==null){
		
			//Check if we are draggin the selected piece
			if (myWorkshop.dragging){
				// We don't want to drag the object by its top-left corner, we want to drag it
				// from where we clicked. Thats why we saved the offset and use it here
				this.style.cursor='move';
                                
                                var previousX = myWorkshop.selection.x;
                                var previousY = myWorkshop.selection.y;
                                
				myWorkshop.selection.x = mouse.x - myWorkshop.dragoffx;
				myWorkshop.selection.y = mouse.y - myWorkshop.dragoffy;
                                
                                var deltaX = previousX - myWorkshop.selection.x;
                                var deltaY = previousY - myWorkshop.selection.y;
                                
                                //Move the rest of the pieces; but not the same one again
                                for(var i=0; i<myWorkshop.massSelection.length; i++){
                                    
                                    if(myWorkshop.massSelection[i].id !== myWorkshop.selection.id){
                                        
                                        myWorkshop.massSelection[i].x -= deltaX;
                                        myWorkshop.massSelection[i].y -= deltaY;
                                        myWorkshop.massSelection[i].validate();
                                    }
                                    
                                }
                                
				myWorkshop.selection.validate(); //Update the info of the piece
				myWorkshop.valid = false; // Something's dragging so we must redraw
				
			}
			//If not, check if we are resizing the piece
			else if(myWorkshop.resizeDrag){
				
				//Get the old X and Y coordinates of the piece.
				var oldX = myWorkshop.selection.x;
				var oldY = myWorkshop.selection.y;
				
				//Check from which handler we are pulling.
				// 0  1  2
				// 3     4
				// 5  6  7
				switch (myWorkshop.expectResize) {
					case 0:
						myWorkshop.selection.x = mouse.x;
						myWorkshop.selection.y = mouse.y;
						myWorkshop.selection.width += oldX - mouse.x;
						myWorkshop.selection.height += oldY - mouse.y;
						break;
					case 1:
						myWorkshop.selection.y = mouse.y;
						myWorkshop.selection.height += oldY - mouse.y;
						break;
					case 2:
						myWorkshop.selection.y = mouse.y;
						myWorkshop.selection.width = mouse.x - oldX;
						myWorkshop.selection.height += oldY - mouse.y;
						break;
					case 3:
						myWorkshop.selection.x = mouse.x;
						myWorkshop.selection.width += oldX - mouse.x;
						break;
					case 4:
						myWorkshop.selection.width = mouse.x - oldX;
						break;
					case 5:
						myWorkshop.selection.x = mouse.x;
						myWorkshop.selection.width += oldX - mouse.x;
						myWorkshop.selection.height = mouse.y - oldY;
						break;
					case 6:
						myWorkshop.selection.height = mouse.y - oldY;
						break;
					case 7:
						myWorkshop.selection.width = mouse.x - oldX;
						myWorkshop.selection.height = mouse.y - oldY;
						break;
					}
				
				
				//Update the piece info and the canvas
				myWorkshop.selection.validate(); //Update the info of the piece
				myWorkshop.valid = false;
				
			}
		
                        //If not, check if we are hovering one of the handlers from the selected piece.
			else{
				
				var found = false;
				
				//For the 8 handlers, check is we are hovering any of them.
				// 0  1  2
				// 3     4
				// 5  6  7
				for (var i = 0; i < 8 && found===false; i++) {

					//We are going to test this one.
					var candidate = myWorkshop.selectionHandles[i];
	 
					//Check if the hover that handler.
					if (mouse.x >= candidate.x && mouse.x <= candidate.x + myWorkshop.mySelBoxSize &&
						mouse.y >= candidate.y && mouse.y <= candidate.y + myWorkshop.mySelBoxSize) {
							
						//If we found one:
						found = true; //flag the found centinel
						myWorkshop.expectResize = i; //mark from which one we are going to resize
						//myWorkshop.valid = false; 
						
						//Change the mouse style accordingly
						switch (i) {
							case 0:
								this.style.cursor='nw-resize';
								break;
							case 1:
								this.style.cursor='n-resize';
								break;
							case 2:
								this.style.cursor='ne-resize';
								break;
							case 3:
								this.style.cursor='w-resize';
								break;
							case 4:
								this.style.cursor='e-resize';
								break;
							case 5:
								this.style.cursor='sw-resize';
								break;
							case 6:
								this.style.cursor='s-resize';
								break;
							case 7:
								this.style.cursor='se-resize';
								break;
						}
					}
	 
				}
				
				
				//If we didn't hover a dragging box
				if(found===false){
								
					//That means that we are not resizing
					//Also change the cursor back not normal.
					myWorkshop.resizeDrag = false;
					myWorkshop.expectResize = -1;
					this.style.cursor='auto';
					
				}
				
			}
		
		}
	
		
		//If we are creating a cutter line
		if(myWorkshop.creatingCutter===true){
			
			myWorkshop.cutterEndX = mx;
			myWorkshop.cutterEndY = my;
			myWorkshop.valid = false;
		}
		
		//If we are choosing the color
		if(myWorkshop.choosingColor===true){
			
                        this.style.cursor='move';
			var centerX = myWorkshop.colorStartX; //this.width/2;
			var centerY = myWorkshop.colorStartY; //this.height/2;
			myWorkshop.colorX = mx;
			myWorkshop.colorY = my;
			var sideHorizontal = mx - centerX;
			var sideVertical = my - centerY;
			if(sideHorizontal===0){
				sideHorizontal = 1;
			}
			var arcTan = Math.atan(sideVertical/sideHorizontal);
			var degrees = arcTan * 57.295;
			degrees = degrees%360;
			
			// 4  |  1
			//----------
			// 3  |  2
			
			//If this, I'm in quadrant 2 and 4
			if(sideHorizontal*sideVertical>0){
				
				//If this, I'm in 2
				if(sideHorizontal>0){
					degrees = degrees + 90;
					
				}
				//Else; I'm in 4
				else{
					degrees = degrees + 270;
				}
				
			}
			//Else, in 1 or 3
			else{
				
				//If this, I'm in 1
				if(sideHorizontal>0){
					degrees = degrees + 90;
				}
				//Else; I'm in 3
				else{
					degrees = degrees + 180 + 90;
				}
				
			}
			
			
			myWorkshop.colorAngle = degrees;
			myWorkshop.valid = false;
			
		}
		
                //If we are mass selecting, draw the square
                if(myWorkshop.massSelecting===true){
                    myWorkshop.valid = false;
                    console.log("Mass selecting CONTINUE");
                }
        
        
        }, true);
	
	//When the left mouse is release
	canvas.addEventListener('mouseup', function(e) {
		
		var mouse = myWorkshop.getMouse(e);
		var mx = mouse.x;
		var my = mouse.y;
		var button = e.which;
		
		//Left mouse buttom
		if(button === 1){
			
			console.log("Left mouse UP");				
			//Return to default status
			myWorkshop.dragging = false;
			myWorkshop.resizeDrag = false;
			myWorkshop.expectResize = -1;
			this.style.cursor='default';
			
			//You just need to validate if you are choosing a color
			if(myWorkshop.choosingColor === true){
				myWorkshop.choosingColor = false;
				myWorkshop.pieceColorChoosen = -1;
				myWorkshop.valid = false;
			}
                    
                        //Now check how many pieces are inside the square you made
                        if(myWorkshop.massSelecting === true){
                            
                            
                            
                            var leftMost = myWorkshop.stopMassSelectionX;
                            var rightMost = myWorkshop.startMassSelectionX;
                            var upMost = myWorkshop.startMassSelectionY;
                            var downMost = myWorkshop.stopMassSelectionY;
                                    
                            if(myWorkshop.startMassSelectionX < myWorkshop.stopMassSelectionX){
                                leftMost = myWorkshop.startMassSelectionX;
                                rightMost = myWorkshop.stopMassSelectionX;
                            }
                            if(myWorkshop.startMassSelectionY < myWorkshop.stopMassSelectionY){
                                upMost = myWorkshop.stopMassSelectionY;
                                downMost = myWorkshop.startMassSelectionY;
                            }
                            
                            myWorkshop.massSelecting = false;
                            for (var i = 0; i<myWorkshop.shapes.length; i++) {
                                    
                                    //If the whole piece is inside the square
                                    if(
                                       
                                       //Top left corner is inside the square
                                       leftMost < myWorkshop.shapes[i].x && myWorkshop.shapes[i].x < rightMost && //Right most is overdoing?
                                       downMost < myWorkshop.shapes[i].y && myWorkshop.shapes[i].y < upMost &&
                           
                                       //Right button corner is inside the square
                                       leftMost < myWorkshop.shapes[i].x+myWorkshop.shapes[i].width && myWorkshop.shapes[i].x+myWorkshop.shapes[i].width < rightMost &&
                                       downMost < myWorkshop.shapes[i].y+myWorkshop.shapes[i].bodyOffsetY + myWorkshop.shapes[i].bodyHeight + myWorkshop.shapes[i].footerHeight && myWorkshop.shapes[i].y+myWorkshop.shapes[i].bodyOffsetY + myWorkshop.shapes[i].bodyHeight + myWorkshop.shapes[i].footerHeight < upMost                    
                                       
                                        ){
                                   
                                        //Flag the piece as being mass selected
                                        myWorkshop.shapes[i].massSelected = true;
                                   
                                        //Add it to the list of pieces
                                        myWorkshop.massSelection.push(myWorkshop.shapes[i]);
                                   
                                    }
                                    else{
                                        myWorkshop.shapes[i].massSelected = false;
                                    }
                                    
                            }
                        
                            console.log("Mass selection STOP!");
                        
                            //Redraw the pieces so they have the glowing square over it
                            myWorkshop.valid = false;
                        
                        }
                        
			
		}
		else if(button === 2){
			
			console.log("Center mouse UP");
                        myWorkshop.swapWorkflowView();
                        console.log("Comming back from WORKFLOW VIEW");
			
			
		}
		else if(button === 3){
			
			console.log("Right mouse UP");
			myWorkshop.creatingCutter = false;
			myWorkshop.valid = false;
			
			
			//Now we have a lot of segments which are the links middle
			//segment and another one which is the cutter.
			
			//We need to test each combination of link, cutter to see
			//if they intersect.If they do; delete the link.
			for(var i=0; i<myWorkshop.links.length; i++){
				
				var myLink = myWorkshop.links[i];
				var myLinkSegment = myLink.middleSegment();
				var S = myLinkSegment;
				
				var CSX = myWorkshop.cutterStartX;
				var CSY = myWorkshop.cutterStartY;
				var CEX = myWorkshop.cutterEndX;
				var CEY = myWorkshop.cutterEndY;
				
				//If they intersect, delete it
				if(segmentsIntersec(S.AX,S.AY,S.BX,S.BY,CSX,CSY,CEX,CEY)===true){
					
					//Delete it from workshop
					console.log("Intersec Link"+i);
					myWorkshop.links.splice(i,1);
					i--; //Length has been reduced; adjust in consecuence
					
					//Tell the boxes at left and right to loose the reference
					//And also to update themselves.
					var outBox = myLink.outputBox;
					var inBox = myLink.inputBox;
					outBox.deleteLink(myLink.id);
					inBox.deleteLink(myLink.id);
					outBox.validate();
					inBox.validate();
                                        
                                        //Now deleting this link could have disconnect two operation
                                        //Did that happen?
                                        
                                        var outputPiece = outBox.parent;
                                        var inputPiece = inBox.parent;
                                        
                                        console.log("Connection");
                                        console.log(outputPiece.title);
                                        console.log(inputPiece.title);
                                        
                                        //They were connected before for sure. Are they still connected?
                                        if(outputPiece.connectWithPiece(inputPiece) === false){
                                            
                                            console.log("Not connected!");
                                            
                                            //If they are not; deleted their old operation connection
                                            var deletedLink = outputPiece.deleteConnectedLink(inputPiece);
                                            var deleted = false;
                                            
                                            console.log("LINKID:" + deletedLink);
                                            
                                            //Delete the link from the workshop
                                            for(var j=0; j<myWorkshop.operationLinks.length && deleted === false; j++){
                                                
                                                if(deletedLink.id === myWorkshop.operationLinks[j].id){
                                                    
                                                    myWorkshop.operationLinks.splice(j,1);
                                                    deleted = true;
                                                    
                                                }
                                                
                                            }
                                        }
                        
				}
				
			}
	
		}
		
		else if(button === 4){
			
			console.log("Side mouse A UP");
		}
		
		else if(button === 5){
			
			console.log("Side mouse B UP");
		}
		else{
			console.log("How many buttons do you have!?");
			
		}
		
		//For every button, no matter which one
		

		
	}, true);
	
	//When double click
	canvas.addEventListener('dblclick', function(e) {
		var mouse = myWorkshop.getMouse(e);
		var mx = mouse.x;
		var my = mouse.y;
		
		var myBox = null;
		var myShape = null;
		//Check for every piece if we double clicked in one of its
		//boxes. Do it from top to bottom.
		for(var i=(myWorkshop.shapes.length-1); i>=0 && myBox===null; i--){
			myShape = myWorkshop.shapes[i];
			
			//If you at least clicked inside the piece we can check
			//deeper.
			if(myShape.contains(mx,my)){
				
				//Check if we clicked in one of the inputs
				myBox = myShape.inInConnection(mx,my);
				
				if(myBox===null){
					
					//If not, check if we clicked in one of the outputs
					myBox = myShape.inOutConnection(mx,my);
					
				}
			}
		}
		
		
		//If we double clicked on a Box
		if(myBox!==null){
			
			myBox.subBoxOpen = !(myBox.subBoxOpen);
			myShape.validate(); //This validation is necessary, trust me!
			myWorkshop.valid = false;
			
		}
		else{		
					
                        /* OLD BOXES WHEN DOUBLE CLICKED              
			var red = Math.floor(Math.random()*256);
			var green = Math.floor(Math.random()*256);
			var blue = Math.floor(Math.random()*256);
			var alpha = Math.floor(Math.random()*7) + 2;
			
			var color = "rgba("+red+","+green+","+blue+",."+alpha+")";
			
			myWorkshop.addShape(new Box(mouse.x - 20, mouse.y - 20, 40, 40, color));
                        */
		}
		
	}, true);
  
	//When a key is pressed
	//(it turns out that you can't add key listener to the canvas)
	window.addEventListener('keydown', function(e) {
		
		//I need to test on people what is more instintive
		//If you press UP, does everything goes up
		//or does the camera goes UP and everything goes down?
		
		var keyID = 0;
		if(e.keyCode){
			keyID = e.keyCode;
		}
		else{
			keyID = e.charCode; //I never get the charCode, not sure when this is trigger
		}
	
		console.log("Pressed key "+keyID);
		
		//If UP is pressed
		if(keyID===38){
			
			
			//If we have a piece selected, move them up
			if(myWorkshop.selection!==null || myWorkshop.massSelection.length > 0){
				
                                var skipIndex = -1;
                                
                                //Move the selection which have focus
                                if(myWorkshop.selection!==null){
                                
                                    if(this.quickMove){
                                        myWorkshop.selection.y -=50;
                                    }
                                    else{
                                        myWorkshop.selection.y -=5;    
                                    }
                                    myWorkshop.selection.validate();
                                    
                                    //Find if the mass selection have the selection
                                    for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(myWorkshop.massSelection[i].id === myWorkshop.selection.id){
                                            
                                            skipIndex = i;
                                        }
                                    }
                                }

                                for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(i!== skipIndex){
                                    
                                            if(this.quickMove){
                                                myWorkshop.massSelection[i].y -=50;
                                            }

                                            else{
                                                myWorkshop.massSelection[i].y -=5;    
                                            }

                                            myWorkshop.massSelection[i].validate();
                                        
                                        }
                                    
                                }
                    
			}
			else{
                    
                            for(var i=0; i<myWorkshop.shapes.length; i++){

                                var myPiece = myWorkshop.shapes[i];

                                if(this.quickMove){
                                    myPiece.y += 50;	 
                                }
                                else{
                                    myPiece.y += 5;	 
                                }
                                myPiece.validate();

                            }    
			}
		}
		//Pressed DOWN
		else if(keyID===40){
			
			//If we have a piece selected, move them up
			if(myWorkshop.selection!==null || myWorkshop.massSelection.length > 0){
				
                                var skipIndex = -1;
                                
                                //Move the selection which have focus
                                if(myWorkshop.selection!==null){
                                
                                    if(this.quickMove){
                                        myWorkshop.selection.y +=50;
                                    }
                                    else{
                                        myWorkshop.selection.y +=5;    
                                    }
                                    myWorkshop.selection.validate();
                                    
                                    //Find if the mass selection have the selection
                                    for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(myWorkshop.massSelection[i].id === myWorkshop.selection.id){
                                            
                                            skipIndex = i;
                                        }
                                    }
                                }

                                for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(i!== skipIndex){
                                    
                                            if(this.quickMove){
                                                myWorkshop.massSelection[i].y +=50;
                                            }

                                            else{
                                                myWorkshop.massSelection[i].y +=5;    
                                            }

                                            myWorkshop.massSelection[i].validate();
                                        
                                        }
                                    
                                }
                    
			}
			else{
                    
                            for(var i=0; i<myWorkshop.shapes.length; i++){

                                var myPiece = myWorkshop.shapes[i];

                                if(this.quickMove){
                                    myPiece.y -= 50;	 
                                }
                                else{
                                    myPiece.y -= 5;	 
                                }
                                myPiece.validate();

                            }    
			}

		}
		//Pressed LEFT
		else if(keyID===37){
	
			//If we have a piece selected, move them up
			if(myWorkshop.selection!==null || myWorkshop.massSelection.length > 0){
				
                                var skipIndex = -1;
                                
                                //Move the selection which have focus
                                if(myWorkshop.selection!==null){
                                
                                    if(this.quickMove){
                                        myWorkshop.selection.x -=50;
                                    }
                                    else{
                                        myWorkshop.selection.x -=5;    
                                    }
                                    myWorkshop.selection.validate();
                                    
                                    //Find if the mass selection have the selection
                                    for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(myWorkshop.massSelection[i].id === myWorkshop.selection.id){
                                            
                                            skipIndex = i;
                                        }
                                    }
                                }

                                for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(i!== skipIndex){
                                    
                                            if(this.quickMove){
                                                myWorkshop.massSelection[i].x -=50;
                                            }

                                            else{
                                                myWorkshop.massSelection[i].x -=5;    
                                            }

                                            myWorkshop.massSelection[i].validate();
                                        
                                        }
                                    
                                }
                    
			}
			else{
                    
                            for(var i=0; i<myWorkshop.shapes.length; i++){

                                var myPiece = myWorkshop.shapes[i];

                                if(this.quickMove){
                                    myPiece.x += 50;	 
                                }
                                else{
                                    myPiece.x += 5;	 
                                }
                                myPiece.validate();

                            }    
			}
		}
		//Pressed RIGHT
		else if(keyID===39){
			
			//If we have a piece selected, move them up
			if(myWorkshop.selection!==null || myWorkshop.massSelection.length > 0){
				
                                var skipIndex = -1;
                                
                                //Move the selection which have focus
                                if(myWorkshop.selection!==null){
                                
                                    if(this.quickMove){
                                        myWorkshop.selection.x +=50;
                                    }
                                    else{
                                        myWorkshop.selection.x +=5;    
                                    }
                                    myWorkshop.selection.validate();
                                    
                                    //Find if the mass selection have the selection
                                    for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(myWorkshop.massSelection[i].id === myWorkshop.selection.id){
                                            
                                            skipIndex = i;
                                        }
                                    }
                                }

                                for(var i=0; i<myWorkshop.massSelection.length; i++){
                                        
                                        if(i!== skipIndex){
                                    
                                            if(this.quickMove){
                                                myWorkshop.massSelection[i].x +=50;
                                            }

                                            else{
                                                myWorkshop.massSelection[i].x +=5;    
                                            }

                                            myWorkshop.massSelection[i].validate();
                                        
                                        }
                                    
                                }
                    
			}
			else{
                    
                            for(var i=0; i<myWorkshop.shapes.length; i++){

                                var myPiece = myWorkshop.shapes[i];

                                if(this.quickMove){
                                    myPiece.x -= 50;	 
                                }
                                else{
                                    myPiece.x -= 5;	 
                                }
                                myPiece.validate();

                            }    
			}
		}
		//Pressed +
		else if(keyID===187 || keyID===107){
		
                        myWorkshop.zoomPlus();
                


		}
		//Pressed -
		else if(keyID===189 || keyID===109){
			
                        myWorkshop.zoomMinus();

		}
		//Pressed DEL/SUPR
		else if(keyID===46){
			
                        myWorkshop.deleteSelection();

		}

                //Press MAY
		else if(keyID===16){
                    this.quickMove = true;
                    console.log("QUICK!");
                    
                }
                //Press CRTL
		else if(keyID===17){
                    this.controlPress = true;
                    console.log("control");
                    
                }            
		
		//Something has change, update
		myWorkshop.valid = false;
		
		
	}, false);

        //When a key is released
        window.addEventListener('keyup', function(e){
            
            var keyID = 0;
            if(e.keyCode){
                keyID = e.keyCode;
            }
            else{
                keyID = e.charCode; //I never get the charCode, not sure when this is trigger
            }
	
            console.log("Pressed key "+keyID);
		
            //MAY is release
            if(keyID===16){
                this.quickMove = false;
            }
            //CRTL is release
            else if(keyID===17){
                this.controlPress = false;
            } 
            
            
        } , false);


        //--Minor stuff that you can personalize
	this.selectionColor = '#DD0000';
	this.selectionWidth = 2;  
	
	this.interval = 30;
	setInterval(function() { myWorkshop.draw(); }, myWorkshop.interval);
	
	this.mySelBoxColor = '#55EE22';
	this.mySelBoxBorderColor = '#111111';
	this.mySelBoxSize = 20;
	this.mySelBoxBorderWidth = 3;
	
	this.cutterColor = '#FF0000';
	this.cutterBorder = 10;
		
	//--Methods
	this.addShape = addShape;
	this.clear = clear;
	this.draw = draw;
	this.getMouse = getMouse;
	this.initialize = initialize;
	this.addLink = addLink;
        this.addOperationLink = addOperationLink;
	this.turnOffGuideLights = turnOffGuideLights;
	//this.deleteShapeByID = deleteShapeByID;
	this.deleteShapeByIndex = deleteShapeByIndex;
        this.addPiece = addPiece;
        this.drawLogo = drawLogo;
        this.swapWorkflowView = swapWorkflowView;
        this.alignHorizontalLeft = alignHorizontalLeft;
        this.alignHorizontalCenter = alignHorizontalCenter;
        this.alignHorizontalRight = alignHorizontalRight;
        this.alignVerticalTop = alignVerticalTop;
        this.alignVerticalCenter = alignVerticalCenter;
        this.alignVerticalBottom = alignVerticalBottom;
        this.saveImage = saveImage;
        this.deleteSelection = deleteSelection;
        this.deleteAll = deleteAll;
        this.zoomPlus = zoomPlus;
        this.zoomMinus = zoomMinus;
        this.zoomOne = zoomOne;
        
        
        function zoomOne(){
            
            //If we are at zoom 0 then do nothing, other wise
            if(this.zoomLevel!==0){
                
                //If we are zoomed in, zoom out until you reach the default level
                if(this.zoomLevel > 0){
                    
                    while(this.zoomLevel!==0){
                        
                        this.zoomMinus();
                        
                    }       
                }
                //Otherwise, zoom in until you reach the 1:1 scale            
                else{

                    while(this.zoomLevel!==0){
                        
                        this.zoomPlus();
                        
                    }                   
                }
            }
        }
        
        function zoomMinus(){
            
            //Limit the amount of negative zoom to -2
            //(I do this because Chrome crash at level -3, weird)
            if(this.zoomLevel>-2){
                this.canvas.width = this.canvas.width*2;
		this.canvas.height = this.canvas.height*2;
		this.zoomLevel -= 1;
            }
            
            this.valid = false;
            
        }
        
        function zoomPlus(){

            //Limit the amount of positive zoom to +5
            //(I do this because Chrome crash at some point after that)
            if(this.zoomLevel<5){
			
                this.canvas.width = this.canvas.width/2;
		this.canvas.height = this.canvas.height/2;
		this.zoomLevel += 1;
			
            }
        
            this.valid = false;
            
            
        }
        
        function deleteAll(){
         
                //Look for the piece in the workshop pieces array
		for(var i=0; i<myWorkshop.shapes.length; ){
					
                    myWorkshop.deleteShapeByIndex(i);
                                                			
                }
				
            
            
        }
        
        function deleteSelection(){
            
                        var idDeleted = -1;
                        
			//If we have a piece selected, delete it
			if(myWorkshop.selection!==null){
				var found = false;
				
				//Look for the piece in the workshop pieces array
				for(var i=0; i<myWorkshop.shapes.length && found===false; i++){
			
					var myPiece = myWorkshop.shapes[i];				
				
					if(myWorkshop.selection.id === myPiece.id){
						
						idDeleted = i;
						myWorkshop.deleteShapeByIndex(i);
                                                found = true;			
					
					}
				
				}
				
			}
                    
                    
                        //Delete all the selections except the one we just deleted (if any)
                        for(var j=0; j<myWorkshop.massSelection.length; j++){
                            
                            console.log("Deleting: "+myWorkshop.massSelection[j].id);
                            
                            if(myWorkshop.massSelection[j].id !== idDeleted){
                                
                                console.log("Not selection");
                                
                                var found = false;
                                
                                //Look for the piece in the workshop pieces array
				for(var i=0; i<myWorkshop.shapes.length && found===false; i++){
			
					var myPiece = myWorkshop.shapes[i];				
				
                                        console.log("Comparing to: "+myPiece.id);
                                
					if(myWorkshop.massSelection[j].id === myPiece.id){
						
                                                console.log("fFound at "+i);
                                                
						myWorkshop.deleteShapeByIndex(i);
                                                found = true;			
					
					}
				}
                            }
                            
                        }
            
        }
        
        
        //Save the image of the canvas
        function saveImage(){
            
            var myCanvas = document.getElementById("canvas_paper");
            
            var image = myCanvas.toDataURL("image/png");
   
            var w=window.open('about:blank','image from canvas');
            w.document.write("<img src='"+image+"' alt='from canvas'/>");
                        
        }
        
        //Align several selected pieces functions:
        function alignHorizontalLeft(){

            //Find the one at most left
            var mostLeft = 999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if(this.massSelection[i].x < mostLeft){
                    
                    mostLeft = this.massSelection[i].x;
                    
                }
                
            }
        
            //Move all of them to that left
            for(var i=0; i<this.massSelection.length; i++){
                
                this.massSelection[i].x = mostLeft;
                this.massSelection[i].validate();
                
            }
        
            //Update the workshop
            this.valid = false;

        }

        function alignHorizontalCenter(){

            //Find the one at most left
            var mostLeft = 999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if(this.massSelection[i].x < mostLeft){
                    
                    mostLeft = this.massSelection[i].x;
                    
                }
                
            }
         
            //Find the one at most right
            var mostRight = -999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if((this.massSelection[i].x + this.massSelection[i].width) > mostRight){
                    
                    mostRight = this.massSelection[i].x + this.massSelection[i].width;
                    
                }
                
            }            
            
            //Find the middle ground
            var middleX = (mostLeft + mostRight)/2;
            
            
            //Move all to the center
            for(var i=0; i<this.massSelection.length; i++){
                
                
                this.massSelection[i].x = middleX - this.massSelection[i].width/2;
                this.massSelection[i].validate();
                
                
            }
            this.valid = false;

        }

        function alignHorizontalRight(){

            //Find the one at most right
            var mostRight = -999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if((this.massSelection[i].x + this.massSelection[i].width) > mostRight){
                    
                    mostRight = this.massSelection[i].x + this.massSelection[i].width;
                    
                }
                
            }
        
            //Move all of them to that left
            for(var i=0; i<this.massSelection.length; i++){
                
                this.massSelection[i].x = mostRight - this.massSelection[i].width;
                this.massSelection[i].validate();
                
            }
        
            //Update the workshop
            this.valid = false;

        }

        function alignVerticalTop(){

            //Find the one at most top
            var mostTop = 999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if(this.massSelection[i].y < mostTop){
                    
                    mostTop = this.massSelection[i].y;
                    
                }
                
            }
        
            //Move all of them to that top
            for(var i=0; i<this.massSelection.length; i++){
                
                this.massSelection[i].y = mostTop;
                this.massSelection[i].validate();
                
            }
        
            //Update the workshop
            this.valid = false;

        }

        function alignVerticalCenter(){

            
            //Find the one at most top
            var mostTop = 999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if(this.massSelection[i].y < mostTop){
                    
                    mostTop = this.massSelection[i].y;
                    
                }
                
            }
            
            
            //Find the one at most bottom
            var mostBottom = -999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if((this.massSelection[i].y + this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight) > mostBottom){
                    
                    mostBottom = this.massSelection[i].y + this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight;
                    
                }
                
            }            
            
            //Find the middle ground
            var middleY = (mostTop + mostBottom)/2;
            
            //Move all to the middle
            for(var i=0; i<this.massSelection.length; i++){
                
                this.massSelection[i].y = middleY - (this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight)/2;
                this.massSelection[i].validate();
                
                
            }
            this.valid = false;

        }

        function alignVerticalBottom(){

            //Find the one at most bottom
            var mostBottom = -999999;
            for(var i=0; i<this.massSelection.length; i++){
                
                if((this.massSelection[i].y + this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight) > mostBottom){
                    
                    mostBottom = this.massSelection[i].y + this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight;
                    
                }
                
            }
        
            //Move all of them to that left
            for(var i=0; i<this.massSelection.length; i++){
                
                this.massSelection[i].y = mostBottom - (this.massSelection[i].bodyOffsetY + this.massSelection[i].bodyHeight + this.massSelection[i].footerHeight);
                this.massSelection[i].validate();
                
            }
        
            //Update the workshop
            this.valid = false;

        }
        
        //Swap the workflow view status
        function swapWorkflowView(){
            this.valid = false;
            for(var i=0; i<this.shapes.length; i++){
                this.shapes[i].workflowView = !(this.shapes[i].workflowView);
                
                if(this.shapes[i].workflowView === true){
                    this.shapes[i].updateWorkflowScore();
                }
            }

            for(var i=0; i<this.shapes.length; i++){
                
                if(this.shapes[i].workflowView === true){
                    this.shapes[i].updateAccumulatedWorkflowScore();
                }
            }
            
            
        }
        
        //Add a piece from a given operation WSDL object and a WSDL name
        function addPiece(wsdlOperation, wsdlName){

            var newPiece = new Piece(this.currentID,40, 40, 500,200, '#FFFFFF' , "New Piece", wsdlName);
            newPiece.initFromOperationWSDL(wsdlOperation);
            newPiece.validate();
            
            //console.log(newPiece.toString());
            	
            this.currentID += 1;
            this.shapes.push(newPiece);
            this.valid = false;
            
            
            
        }
	
	//Delete a shape from the workshop by ID
	function deleteShapeByIndex(i){
	
		//Delete the links references inside the piece
		//and with the pieces that connects
		var deletedLinks = this.shapes[i].deleteLinks();
																	
		//For every ID in the deleted link list
		for(var j=0; j<deletedLinks.length; j++){
								
			var linkFound = false;
								
			//Found the index inside the workshop link list
			for(var k=0; k<myWorkshop.links.length && linkFound===false;k++){
										
				//Remove it from the workshop link list
				if(this.links[k].id===deletedLinks[j]){
					linkFound = true;
					this.links.splice(k,1);		
				}
									
			}
                    
			//Found the index inside the workshop operation link list (this is a bit unnefficient :-/)
			for(var k=0; k<myWorkshop.operationLinks.length && linkFound===false; k++){
										
				//Remove it from the workshop link list
				if(this.operationLinks[k].id===deletedLinks[j]){
					linkFound = true;
					this.operationLinks.splice(k,1);		
				}
									
			}                        
                    
								
		}
		
		//If the piece was a selection
		if(this.selection !== null){
			
			//If my selected output belong to this piece, stop linking
			if(this.selectedOutput!==null){
				if(this.selectedOutput.parent.id === this.shapes[i].id){
					
					this.turnOffGuideLights();
					this.selectedOutput = null;
					this.readyToConnect = false;
					
				}
			}
			
			//Then turn off the selection status in the workshop
			if(this.selection.id === this.shapes[i].id){
				this.selection = null;
									
				//Turn off the inputs lights
				this.turnOffGuideLights();

				//Return to default status
				this.dragging = false;
				this.resizeDrag = false;
				this.expectResize = -1;
				this.canvas.style.cursor='default';
					
			}
		
		}
				
		//Take out the piece from the workshop
		this.shapes.splice(i,1);
		this.valid = false;
		
						
	}
		
	//Turn off all the lights in the inputs
	function turnOffGuideLights(){
		
		//For every piece in the workshop
		//Tell every input box to turn off the linking lights
                //and tell the piece to turn off the linking lights
		//var inputBoxes = [];
		for(j=0;j<this.shapes.length; j++){
									
			var myShape = this.shapes[j];
			var allInputs = myShape.getInputBoxes();
									
			for(k=0; k<allInputs.length; k++){
									
				allInputs[k].checkingLink = false;
				allInputs[k].candidateCompatible = -1;
				allInputs[k].validate();
										
			}
                        
                        myShape.checkingLink = false;
                        myShape.candidateCompatible = -1;
                        myShape.validate();
		}	
	}
	
	//Add a link to the list of links
	function addLink(link){
		this.links.push(link);
	}
	
        //Add an operation link to the list of links
        function addOperationLink(link){
            this.operationLinks.push(link);
        }
	
	//Initialize some parameters beyond the reach of the constructor
	//(In C++ you should't use this function, instead write this code
	// in the constructor definition. But JS seems like it doesn't allow
	// you to modify the default constructor)
	function initialize(){
		
		//Set up the resize handler boxes
		for (var i = 0; i < 8; i ++) {
			var handler = new Box;
			this.selectionHandles.push(handler);
		}	
	}

	//Add something new to the universe.
	function addShape(shape){
		shape.id = this.currentID;
		
		shape.validate();
		this.currentID += 1;
		this.shapes.push(shape);
		this.valid = false;
	}	
		
	//Erase everthing and get the canvas clean.
	//(This doesn't delete stuff; just covers everything)
	function clear(){
		
		var global_paper = document.getElementById("canvas_paper");

		var canvasWidth = global_paper.width;
		var canvasHeight = global_paper.height;
		
		this.ctx.fillStyle = "#F2F2F2"; //Broken white background    
		this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);    
		
	}
	
	//Update the canvas.
	//(Only when something changes, and at 1/INTERVAL frequency)
	function draw(){
		
		var global_paper = document.getElementById("canvas_paper");

		var canvasWidth = global_paper.width;
		var canvasHeight = global_paper.height;
		
		var randomDate = new Date();
		var randomTime = randomDate.getTime();
		// if our state is invalid, redraw and validate
		// also redraw every 500ms just in case the user resized the window
		// redrawing every X time totally kills the efficiency of the program :-/
		//if (!this.valid || randomTime%500000) {
			
		//draw only if something changed
		if (!this.valid) {
			
			//Wipe everything new.
			this.clear();
    
			//Draw the pieces.
			for (var i = 0; i < this.shapes.length; i++) {
				
				var shape = this.shapes[i];
				
				//Draw only the pieces which are inside the camera
				if (!(shape.x > canvasWidth || shape.y > canvasHeight ||
					shape.x + shape.width < 0 || shape.y + shape.height < 0 )){
				
					shape.draw(this.ctx);
						
				} 
				
			}
    
			//If something is selected draw:
			//-The selection border
			//-The handlers
			if (this.selection !== null) {
				
				//Draw the selection border
				this.ctx.strokeStyle = this.selectionColor;
				this.ctx.lineWidth = this.selectionWidth;
				var mySel = this.selection;
				this.ctx.strokeRect(this.selection.x,this.selection.y,this.selection.width,this.selection.height);
				
			
				//Draw the handlers.
				var half = this.mySelBoxSize/2;
				
				//--Prepare the coordinates of the 8 handlers
				this.selectionHandles[0].x = this.selection.x-half;
				this.selectionHandles[0].y = this.selection.y-half;
      
				this.selectionHandles[1].x = this.selection.x+this.selection.width/2-half;
				this.selectionHandles[1].y = this.selection.y-half;
				  
				this.selectionHandles[2].x = this.selection.x+this.selection.width-half;
				this.selectionHandles[2].y = this.selection.y-half;
				  
				this.selectionHandles[3].x = this.selection.x-half;
				this.selectionHandles[3].y = this.selection.y+this.selection.height/2-half;
				  
				this.selectionHandles[4].x = this.selection.x+this.selection.width-half;
				this.selectionHandles[4].y = this.selection.y+this.selection.height/2-half;
				  
				this.selectionHandles[6].x = this.selection.x+this.selection.width/2-half;
				this.selectionHandles[6].y = this.selection.y+this.selection.height-half;
				  
				this.selectionHandles[5].x = this.selection.x-half;
				this.selectionHandles[5].y = this.selection.y+this.selection.height-half;
				  
				this.selectionHandles[7].x = this.selection.x+this.selection.width-half;
				this.selectionHandles[7].y = this.selection.y+this.selection.height-half;

				//--Finally draw all the handlers
				this.ctx.fillStyle = this.mySelBoxColor;
				for (var i = 0; i < 8; i ++) {
					this.ctx.fillRect(this.selectionHandles[i].x, this.selectionHandles[i].y, this.mySelBoxSize, this.mySelBoxSize);
					this.ctx.strokeStyle = this.mySelBoxBorderColor;
					this.ctx.lineWidth = this.mySelBoxBorderWidth;
					this.ctx.strokeRect(this.selectionHandles[i].x,this.selectionHandles[i].y, this.mySelBoxSize, this.mySelBoxSize);
				
				}
				
				
				
			}
    
			
			//If a cutter is being made draw it
			if(this.creatingCutter===true){
				
				this.ctx.strokeStyle = this.cutterColor;
				this.ctx.lineWidth = this.cutterBorder;
				
			    // Stroked line
				this.ctx.beginPath();
				this.ctx.moveTo(this.cutterStartX,this.cutterStartY);
				this.ctx.lineTo(this.cutterEndX,this.cutterEndY);
				this.ctx.closePath();
				this.ctx.stroke();
			
			
			
			}
			
			
			//If you are picking up a color
			if(this.choosingColor === true){
				
				//Draw the background cicle rainbow
				//Which are many strokes of different arcs
				var arcX = this.colorStartX; //this.canvas.width/2;
				var arcY = this.colorStartY; //this.canvas.height/2;
				var radius = this.canvas.height/18;
				var counterClockwise = false;
				
				var arcColor = 0;
				var r = 0;
				var g = 0;
				var b = 0;
				var strokeColor = "";
				var startAngle = 0;
				var endAngle = 0;			
				
				//Draw the rainbow
				for(var i=0; i<360; i++){
					
					arcColor = hueToRGB(i);
					r = arcColor.R;
					g = arcColor.G;
					b = arcColor.B;
					strokeColor = 'rgb('+r+','+g+','+b+')';
					startAngle = (i*0.017532) - Math.PI/2;
					endAngle = (((i+1)+(i+1)*0.05)*0.017532) - Math.PI/2;
					this.ctx.beginPath();
					this.ctx.arc(arcX, arcY, radius, startAngle, endAngle, counterClockwise);
					this.ctx.lineWidth = this.canvas.height/15;
					this.ctx.strokeStyle = strokeColor;
					this.ctx.stroke();
					
				}
				
				//Draw a stroke over the outer rim
				radius = this.canvas.height*0.09;
				startAngle = 0;
				endAngle = 2*Math.PI;
				this.ctx.beginPath();
				this.ctx.arc(arcX, arcY, radius, startAngle, endAngle, counterClockwise);
				this.ctx.lineWidth = this.canvas.height/150;
				this.ctx.strokeStyle = 'black';
				this.ctx.stroke();				
		
				//Draw the color chooser marker
				this.ctx.strokeStyle = 'black';
				this.ctx.lineWidth = this.canvas.height/110;
			
                                // Stroked line
				this.ctx.beginPath();
				this.ctx.moveTo(this.colorStartX,this.colorStartY);
				//this.ctx.moveTo(this.canvas.width/2,this.canvas.height/2);
				this.ctx.lineTo(this.colorX,this.colorY);
				this.ctx.closePath();
				this.ctx.stroke();
				
				this.ctx.strokeStyle = 'white';
				this.ctx.lineWidth = this.canvas.height/160;
			
                                // Stroked line
				this.ctx.beginPath();
				this.ctx.moveTo(this.colorStartX,this.colorStartY);
				//this.ctx.moveTo(this.canvas.width/2,this.canvas.height/2);
				this.ctx.lineTo(this.colorX,this.colorY);
				this.ctx.closePath();
				this.ctx.stroke();
				
				
				//Draw a tiny handler
				radius = this.canvas.height*0.01;
				startAngle = 0;
				endAngle = 2*Math.PI;
				this.ctx.beginPath();
				this.ctx.arc(this.colorX, this.colorY, radius, startAngle, endAngle, counterClockwise);
				this.ctx.fillStyle = 'red';
				this.ctx.fill();
				this.ctx.lineWidth = this.canvas.height/400;
				this.ctx.strokeStyle = 'black';
				this.ctx.stroke();
				
				
				//Draw the circle and a stroke over the inner rim
				radius = this.canvas.height*0.05;
				arcColor = hueToRGB(this.colorAngle);
				r = arcColor.R;
				g = arcColor.G;
				b = arcColor.B;
				startAngle = 0;
				endAngle = 2*Math.PI;
				this.ctx.beginPath();
				this.ctx.arc(arcX, arcY, radius, startAngle, endAngle, counterClockwise);
				this.ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
				this.ctx.fill();
				this.ctx.lineWidth = this.canvas.height/150;
				this.ctx.strokeStyle = 'black';
				this.ctx.stroke();
				
				//Set the color of the piece	
				this.shapes[this.pieceColorChoosen].fill = 'rgb('+r+','+g+','+b+')';
				
				
			}
			
			
                        //If you are mass selecting, draw the selection square
                        if(this.massSelecting === true){
                                     
                            this.ctx.strokeStyle = MASS_SELECTION_COLOR;
                            this.ctx.lineWidth = this.mySelBoxBorderWidth;
                            //this.ctx.strokeRect(this.stopMassSelectionX,this.stopMassSelectionY, this.startMassSelectionX, this.startMassSelectionY);
                            this.ctx.strokeRect(this.startMassSelectionX,this.startMassSelectionY, this.stopMassSelectionX-this.startMassSelectionX, this.stopMassSelectionY-this.startMassSelectionY);
                            
                        }
                
                        //Flag it as ready
			this.valid = true;
		}
	
	}

	//Creates an object with X and Y coordinates.
	//The coordinates are relative to the canvas, not the HTML document
	function getMouse(e){
		
		//Get the canvas itself.
		var global_paper = document.getElementById("canvas_paper");
		
		//Get the elements from the HTML which push the canvas
		//away from the left and from the top.
		var global_display = document.getElementById("display");
		var global_container = document.getElementById("paper");
		
		//Find out how many pixels are from the (0,0) of the canvas
		//to the (0,0) of the HTML
	  	var totalLeft = global_display.offsetLeft + global_container.offsetLeft;
		var totalTop = global_display.offsetTop + global_container.offsetTop;

		//Find out how many pixels the canvas container has.
		var containerWidth = global_container.offsetWidth;
		var containerHeight = global_container.offsetHeight;

		//Find out how many theoretical pixels the canvas has.
		var canvasWidth = global_paper.width;
		var canvasHeight = global_paper.height;

		//Find out the real mouse click coordinates.
		var absoluteX = e.clientX;
		var absoluteY = e.clientY;

		//Find out the theoretical mouse click coordinates.
		var canvasX = Math.round((absoluteX-totalLeft)/containerWidth * canvasWidth);
		var canvasY = Math.round((absoluteY-totalTop)/containerHeight * canvasHeight);

		//Return a map with x and y.
		return {x: canvasX, y: canvasY};
		
	}
	
        //Draws the initial logo while loading stuff
        function drawLogo(){
            
            //Wipe everything new.
            this.clear();
            
            var p10Width = this.canvas.width/10;
            var p10Height = this.canvas.height/10;
            var left = 0;
            var top = 0;
            var right = this.canvas.width;
            var botton = this.canvas.height;
            
            //Draw the background rectangle
            this.ctx.fillStyle = "#323232";
            this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
            
            //Draw the white square
            var whiteSquareSide = this.canvas.height/10;
            if(this.canvas.height>this.canvas.width){
                whiteSquareSide = this.canvas.width/10;
            }
            
            this.ctx.fillStyle = "rgb(255,255,255)";
            this.ctx.fillRect(p10Width , botton - 3*p10Height, whiteSquareSide, whiteSquareSide);
            
            //Get a random angle?
            var baseAngle = 0;
            
            //Draw the top rectangle
            var color = hueToRGB(baseAngle);
            var r = color.R;
            var g = color.G;
            var b = color.B;           
            this.ctx.fillStyle = 'rgba('+r+','+g+','+b+',0.6)';
            this.ctx.fillRect(p10Width - whiteSquareSide/2 + whiteSquareSide/4 ,0, whiteSquareSide, botton - 3*p10Height + whiteSquareSide);
            
            //Draw the left rectangle
            color = hueToRGB(baseAngle + 90);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgba('+r+','+g+','+b+',0.6)';
            this.ctx.fillRect(0,this.canvas.height - 3*this.canvas.height/10 + whiteSquareSide/2 - whiteSquareSide/4, p10Width+whiteSquareSide, whiteSquareSide);
            
            //Draw the button rectangle
            var color = hueToRGB(baseAngle+180);
            var r = color.R;
            var g = color.G;
            var b = color.B;           
            this.ctx.fillStyle = 'rgba('+r+','+g+','+b+',0.6)';
            this.ctx.fillRect(this.canvas.width/10 + whiteSquareSide/2 - whiteSquareSide/4,this.canvas.height - 3*this.canvas.height/10, whiteSquareSide, 3*this.canvas.height/10);
            
            //Draw the right rectangle
            color = hueToRGB(baseAngle + 270);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgba('+r+','+g+','+b+',0.6)';
            this.ctx.fillRect(this.canvas.width/10,this.canvas.height - 3*this.canvas.height/10 - whiteSquareSide/2 + whiteSquareSide/4, 9.5*this.canvas.width/10, whiteSquareSide);
            
            //Draw an overlay white square
            this.ctx.fillStyle = "rgba(255,255,255,0.4)";
            this.ctx.fillRect(p10Width , botton - 3*p10Height, whiteSquareSide, whiteSquareSide);
            
            /**
            //Draw the rectangle where is going to be the text WORKSHOP
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(p10Width + whiteSquareSide + whiteSquareSide/4 ,botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 , (right - p10Width) - (p10Width + whiteSquareSide + whiteSquareSide/4) , whiteSquareSide*2);
            
            //Draw the rectangle where is going to be the text WSDL
            this.ctx.strokeStyle = "red";
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(p10Width + whiteSquareSide + whiteSquareSide/4 ,botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 - whiteSquareSide, ((right - p10Width) - (p10Width + whiteSquareSide + whiteSquareSide/4))/8 , whiteSquareSide);
            **/
            
            //Write WORKSHOP
            var fontSize = addjustFontSize((right - p10Width) - (p10Width + whiteSquareSide + whiteSquareSide/4), whiteSquareSide*2, "WORKSHOP");
            this.ctx.textAlign = 'left';
            fontSize = fontSize*1.4;
            if(this.canvas.height<this.canvas.width){
                fontSize = fontSize*1.90;
            }
            
            this.ctx.font= "bold "+fontSize+"px DejaVu Sans Mono";		
            this.ctx.fillStyle = '#F2F2F2';
            this.ctx.fillText("WORKSHOP", p10Width + whiteSquareSide + whiteSquareSide/4, botton - 3*p10Height - whiteSquareSide/2);

            //Write WSDL
            fontSize = addjustFontSize(((right - p10Width) - (p10Width + whiteSquareSide + whiteSquareSide/4))/8 , whiteSquareSide, "W");
            fontSize = fontSize*0.8;
            var offsetY = 0;
            if(this.canvas.height>this.canvas.width){
                fontSize = fontSize*0.33;
                offsetY = whiteSquareSide*0.9;
            }
            
            
            this.ctx.textAlign = 'left';
            this.ctx.font= "bold "+fontSize*1.65+"px DejaVu Sans Mono";
            color = hueToRGB(baseAngle + 45);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
            this.ctx.fillText("W", p10Width + whiteSquareSide + whiteSquareSide/4, botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 + offsetY);

            color = hueToRGB(baseAngle + 45 + 90);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
            this.ctx.fillText("S", p10Width + whiteSquareSide + whiteSquareSide/4 + fontSize, botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 + offsetY);
            
            color = hueToRGB(baseAngle + 45 + 180);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
            this.ctx.fillText("D", p10Width + whiteSquareSide + whiteSquareSide/4 + fontSize*2, botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 + offsetY);
            
            color = hueToRGB(baseAngle + 45 + 270);
            r = color.R;
            g = color.G;
            b = color.B;           
            this.ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
            this.ctx.fillText("L", p10Width + whiteSquareSide + whiteSquareSide/4 + fontSize*3, botton - 3*p10Height - whiteSquareSide/2 - whiteSquareSide*2 + offsetY);
        }
        
}

}






//___________________________________________
//           HTML STUFF
//___________________________________________

{

function display_wsdl_list(){
    
    //Clear the list of WSDLs
    var selector = document.getElementById("selector");
    selector.innerHTML = "";
    
    switch(filter_mode){
    
        case 0:

            //If you filter by nothing, then show everything
            if((filter_option[0]   || filter_option[1]   || filter_option[2]   || filter_option[3]||
               input_compatible[0]|| input_compatible[1]|| input_compatible[2]|| input_compatible[3]||
               semantic_option[0] || semantic_option[1] || semantic_option[2] || semantic_option[3])===false){

               console.log("No filter");

                //Prepare the positive result WSDLs
                for(var i=0; i<WSDL_list.length; i++){

                    //var index = WSDL_search_indexes[i];

                    var middleMenu = ' <div id="item'+i+'_wsdl_info" class="wsdl_info"> ' + WSDL_list[i].getName() + '</div> ';
                    var rightMenu =  ' <div id="item'+i+'_menu_right" class="wsdl_menu_right" onclick="expandWSDL(this)"> + </div> ';

                    var topLayer = '<div id="item'+i+'_top" class="wsdl_top"> ' + middleMenu+' '+rightMenu+'</div>';
                    var expandLayer = '<div id="item'+i+'_expand" class="wsdl_expand"></div>';

                    selector.innerHTML += '<div id="item'+i+'" name="'+WSDL_list[i].getName()+'" class="wsdl_item"> ' + topLayer + expandLayer + ' </div>';

                }
                
            }
            //If there is at least one filter in action; lets filter some stuff
            else{

                //Create the WSDL list
                for(var i=0; i<WSDL_list.length; i++){
                    
                    var middleMenu = ' <div id="item'+i+'_wsdl_info" class="wsdl_info"> ' + WSDL_list[i].getName() + '</div> ';
                    var rightMenu =  ' <div id="item'+i+'_menu_right" class="wsdl_menu_right" onclick="expandWSDL(this)"> + </div> ';

                    var topLayer = '<div id="item'+i+'_top" class="wsdl_top"> ' + middleMenu+' '+rightMenu+'</div>';
                    var expandLayer = '<div id="item'+i+'_expand" class="wsdl_expand"></div>';

                    selector.innerHTML += '<div id="item'+i+'" name="'+WSDL_list[i].getName()+'" class="wsdl_item"> ' + topLayer + expandLayer + ' </div>';                    
                                        
                }
            
                //Set them all to invisible
                for(var i=0; i<WSDL_list.length; i++){
                
                    var myWSDL = document.getElementById('item'+i);
                    myWSDL.style.display = "none";
                        
                    
                }
            
                //Display back those who have the filter requierements
                for(var i=0; i<WSDL_list.length; i++){
                    
                    var WSDLOperations = WSDL_list[i].getOperationList();
                    var myWSDL = document.getElementById('item'+i);
                    var operationNamePass = false;
                    var inputNamePass = false;
                    var outputNamePass = false;
                    var semanticNamePass = false;
                    var inputCompatiblePass = false;
                    var semanticCorrelatePass = false;
                    
                    //Check if pass the operation requierement
                    if(filter_option[0]===true){
                        for(var j=0; j<search_result_operation.length && operationNamePass===false; j++){

                            //If you have at least one operation with a valid name, you pass the test
                            if(WSDL_list[i].hasOperation(search_result_operation[j])===true){
                                operationNamePass = true;
                                console.log("operation found!");
                            }
                        }
                    }
                    else{
                        operationNamePass = true;
                    }
                    
                    //Check if pass the input requierement
                    if(filter_option[1]===true){
                        
                        //For each operation
                        for(var j=0; j<WSDLOperations.length; j++){
                            
                            var operationInputNames = WSDLOperations[j].getInputsNames();
                            
                            //For each input in the search result
                            for(var k=0; k<search_result_inputs.length && inputNamePass===false; k++){
                                
                                if(operationInputNames.indexOf(search_result_inputs[k])>-1){
                                    
                                    inputNamePass = true;
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    else{
                        inputNamePass = true;
                    }
                    
                    
                    //Check if pass the output requirement
                    if(filter_option[2]===true){
                        
                        //For each operation
                        for(var j=0; j<WSDLOperations.length; j++){
                            
                            var operationOutputNames = WSDLOperations[j].getOutputsNames();
                            
                            //For each output in the search result
                            for(var k=0; k<search_result_outputs.length && outputNamePass===false; k++){
                                
                                if(operationOutputNames.indexOf(search_result_outputs[k])>-1){
                                    
                                    outputNamePass = true;
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    else{
                        outputNamePass = true;
                    }                    
                    
                    //Check if pass the semantic requierment
                    if(filter_option[3]===true){
                        
                        //For each operation
                        for(var j=0; j<WSDLOperations.length; j++){
                            
                            var operationSemanticsNames = WSDLOperations[j].getAllSemantics();
                            
                            //For each input in the search result
                            for(var k=0; k<search_result_semantics.length && semanticNamePass===false; k++){
                                
                                if(operationSemanticsNames.indexOf(search_result_semantics[k])>-1){
                                    
                                    semanticNamePass = true;
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    else{
                        semanticNamePass = true;
                    }
                    
                    //Check if at least one operation pass the input requierements
                    if(The_Workshop.selectedOutput!==null && (input_compatible[0]|| input_compatible[1]|| input_compatible[2]|| input_compatible[3]) === true){
                        
                        var full = false;
                        var possible = false;
                        var maybe = false;
                        var none = false;
                        
                        //For each operation of the WSDL check the compatibility status
                        for(var j=0; j<WSDLOperations.length; j++){
                        
                            var operation = WSDLOperations[j];

                            var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", WSDL_list[i].name);        
                            auxiliarPiece.initFromOperationWSDL(operation);
                            
                            var inputBoxes = auxiliarPiece.getInputBoxes();
                            
                            //For each of the input of that operation
                            for(var k=0; k<inputBoxes.length; k++){
                            
                                var result = getCompatible(The_Workshop.selectedOutput,inputBoxes[k]);
                                
                                if(result===0){
                                    full = true;
                                }
                                else if(result===1){
                                    possible = true;
                                }
                                else if(result === 2){
                                    maybe = true;
                                }
                                else if(result === 3){
                                    none = true;
                                }
                                else{
                                    console.error("Unknown compatibility!");
                                }
                                
                            }
                            
                            
                        }
                    
                        //If all statuses match the filter options, then we are good
                        if(input_compatible[0] === true && full === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[1] === true && possible === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[2] === true && maybe === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[3] === true && none === true){
                            inputCompatiblePass = true;
                        }                        
                    
                        
                    }
                    else{
                        inputCompatiblePass = true;
                        
                    }
                    
                    //Check if at least one operation pass the semantic correlation requierements
                    if((The_Workshop.selectedOutput!==null || The_Workshop.selection!==null) && (semantic_option[0]|| semantic_option[1]|| semantic_option[2]|| semantic_option[3]) === true){
                        
                        var full = false;
                        var possible = false;
                        var maybe = false;
                        var none = false;
                        
                        //For each operation of the WSDL check the compatibility status
                        for(var j=0; j<WSDLOperations.length; j++){
                        
                            var operation = WSDLOperations[j];

                            var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", WSDL_list[i].name);        
                            auxiliarPiece.initFromOperationWSDL(operation);
                            
                            var candidatePiece = null;
                            if(The_Workshop.selectedOutput!==null){
                                candidatePiece = The_Workshop.selectedOutput.parent;
                            }
                            else{
                                candidatePiece = The_Workshop.selection;
                            }
                            
                            var result = getOperationCompatible(candidatePiece,auxiliarPiece);
                                
                            if(result===0){
                                full = true;
                            }
                            else if(result===1){
                                possible = true;
                            }
                            else if(result === 2){
                                maybe = true;
                            }
                            else if(result === 3){
                                none = true;
                            }
                            else{
                                console.error("Unknown compatibility!");
                            }
                            
                        }
                    
                        //If all statuses match the filter options, then we are good
                        if(semantic_option[0] === true && full === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[1] === true && possible === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[2] === true && maybe === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[3] === true && none === true){
                            semanticCorrelatePass = true;
                        }                        
                    
                        
                    }
                    else{
                        semanticCorrelatePass = true;
                        
                    }
                    
                    //If every test is pass, then show the WSDL
                    if((operationNamePass && inputNamePass && outputNamePass &&
                       semanticNamePass && inputCompatiblePass && semanticCorrelatePass) === true){
                   
                       myWSDL.style.display = "-webkit-box";
                   
                    }
                    
                }
            
            }
        
            break;
            
        case 1:
            
            //We know the first operation is operation 4
            
            selector.innerHTML += '<div id="operation_4" class="semantic_operation">'+
                                       '<div id="operation_4_top" class="semantic_header">'+
                                            '<div id="operation_4_title" class="semantic_title">'+
                                                'Operation'+
                                            '</div>'+
                                            '<div id="operation_4_expand" class="semantic_bottom" onclick="expandOntology(this)">'+
                                                '+'+
                                            '</div>'+                                
                                        '</div>'+
                                
                                        '<div id="operation_4_container" class="semantic_container">'+
                                            '<div id="operation_4_box" class="semantic_box">'+
                                    
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+                
                                '</div>';
            
            break;


    }
    
    
}
    
function display_wsdl_list2(){
    
    //Clear the list of WSDLs
    var selector = document.getElementById("selector");
    selector.innerHTML = "";
    
    //Prepare the search array with the references
    var WSDL_search_indexes = [];
    
    //We can filter by many things:
    //-Operation Name
    //-Input Name
    //-Output Name
    //-Semantic Concept
    //So for each WSDL, check if it has whatever name inside
    for(var i=0; i<WSDL_list.length; i++){
        
        /*console.log("Searching in "+WSDL_list[i].getName());*/
    
        //Check for every word found
        for(var j=0; j<search_result.length; j++){
        
            /*console.log("Word is "+search_result[j]);*/
            
            //If founded, add it to the list and continue with the next WSDL
            if(WSDL_list[i].hasOperation(search_result[j])){
                
                /*console.log("Found!");
                console.log("Adding "+WSDL_list[i].getName());*/
                WSDL_search_indexes.push(i);
                j = search_result.length + 1;
                
            }
        }
        
        
    }

    /*console.log("TOTAL WSDL to SHOW: "+WSDL_search_indexes.length);*/
    
    switch(filter_mode){
    
        case 0:

            //Prepare the positive result WSDLs
            for(var i=0; i<WSDL_search_indexes.length; i++){

                var index = WSDL_search_indexes[i];

                var middleMenu = ' <div id="item'+index+'_wsdl_info" class="wsdl_info"> ' + WSDL_list[index].getName() + '</div> ';
                var rightMenu =  ' <div id="item'+index+'_menu_right" class="wsdl_menu_right" onclick="expandWSDL(this)"> + </div> ';

                var topLayer = '<div id="item'+index+'_top" class="wsdl_top"> ' + middleMenu+' '+rightMenu+'</div>';
                var expandLayer = '<div id="item'+index+'_expand" class="wsdl_expand"></div>';

                selector.innerHTML += '<div id="item'+index+'" class="wsdl_item"> ' + topLayer + expandLayer + ' </div>';

            }
        
            break;
            
        case 1:
            
            //We know the first operation is operation 4
            
            selector.innerHTML += '<div id="operation_4" class="semantic_operation">'+
                                       '<div id="operation_4_top" class="semantic_header">'+
                                            '<div id="operation_4_title" class="semantic_title">'+
                                                'Operation'+
                                            '</div>'+
                                            '<div id="operation_4_expand" class="semantic_bottom" onclick="expandOntology(this)">'+
                                                '+'+
                                            '</div>'+                                
                                        '</div>'+
                                
                                        '<div id="operation_4_container" class="semantic_container">'+
                                            '<div id="operation_4_box" class="semantic_box">'+
                                    
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+                
                                '</div>';
            
            break;


    }
    
    
}

//This function changes the view of the WSDL selector
//For now there is only Tree view, and List view.
function swapFilter(){
    
    //If we are in list mode:
    if(filter_mode===0){
        
        //Change the filter mode
        filter_mode=1;
        
        //Change the class, so now is a toggled ON icon
        var newClass = "icon_ON";
        document.getElementById("view_selector").className=newClass;
        
        //Do your thing
        console.log("Tree mode activated");
        
    }
    
    //If we are in tree mode:
    else{
        if(filter_mode===1)
        

        //Change the filter mode
        filter_mode=0;
        
        //Change the class, so now is a toggled OFF icon
        var newClass = "icon";
        document.getElementById("view_selector").className=newClass;
        
        //Do your thing
        console.log("List mode activated");
        
        
    }
    
    display_wsdl_list();
    
    
    
}

//This function update the showed list of the search result.
//Is trigger everytime the user release a key.
function filterList(){
    
    //Grab the elements we need
    //var paper = document.getElementById("lister_paper");
    var input = document.getElementById("inputWSDL");
    
    //var floater = document.getElementById("filter_lister");
    var operation_paper = document.getElementById("operation_lister_paper");
    var input_paper = document.getElementById("input_lister_paper");
    var output_paper = document.getElementById("output_lister_paper");
    var semantic_paper = document.getElementById("semantic_lister_paper");
    
    
    
    //Reset the results
    //search_result = [];

    search_result_operation = [];
    search_result_inputs = [];
    search_result_outputs = [];
    search_result_semantics = [];
    
    
    //Get every word the user want to find, we must found all of them
    //ALL WORDS MUST MATCH
    var words = input.value.toLowerCase().split(" ");
    
    //console.log("Searching for words: "+words);
    
    
    //Search only in those places the user has selected
    
    //Filter by Operation names
    //--------------------------------------
    if(filter_option[0]===true){
      
        operation_paper.style.display = "block";
        
        //For each operation name
        for(var i=0; i<operation_names.length; i++){

            //Prepare the display status
            var displayStatus = "";

            //For every word we must find
            for (var j = 0; j<words.length; j++) {
                //Check if the word is not inside the operation name
                if(operation_names[i].toLowerCase().indexOf(words[j])<0){

                    //If is not, set display to none and stop searching
                    //console.log("Word "+words[j]+" not found in name "+operation_names[i]);
                    displayStatus = "none";
                    j= 1000000; //If somebody input a million words it will break the program; he deserved!


                }
                //If it is inside we continue the search
                //else{

                    //displayStatus = "";
                    //console.log("Word "+words[j]+" found in name "+operation_names[i]);
                //}


            }

            //Update the display status in that element name.
            var element = document.getElementById('searchListItemOperation'+i);
            //console.log("Setting display of Item "+i+" to "+displayStatus);
            element.style.display = displayStatus;

            //If it is display; add it to the final results
            if(displayStatus===""){

                //console.log("Adding word "+operation_names[i]+" to result");
                search_result_operation.push(operation_names[i]);
            }

        }
    
        //console.log(search_result_operation);
    
        //Finally, if the search results are empty; don't show that paper
        if(search_result_operation.length===0){
            operation_paper.style.display = "none";        
        }
        
    }
    else{
        operation_paper.style.display = "none";
    }
    
    
    //Filter by Input names
    //--------------------------------------
    if(filter_option[1]===true){
      
        input_paper.style.display = "block";
        
        //For each input name
        for(var i=0; i<input_names.length; i++){

            //Prepare the display status
            var displayStatus = "";

            //For every word we must find
            for (var j = 0; j<words.length; j++) {
                //Check if the word is not inside the operation name
                if(input_names[i].toLowerCase().indexOf(words[j])<0){

                    //If is not, set display to none and stop searching
                    //console.log("Word "+words[j]+" not found in name "+operation_names[i]);
                    displayStatus = "none";
                    j= 1000000; //If somebody input a million words it will break the program; he deserved!


                }
                //If it is inside we continue the search
                //else{

                    //displayStatus = "";
                    //console.log("Word "+words[j]+" found in name "+operation_names[i]);
                //}


            }

            //Update the display status in that element name.
            var element = document.getElementById('searchListItemInput'+i);
            //console.log("Setting display of Item "+i+" to "+displayStatus);
            element.style.display = displayStatus;

            //If it is display; add it to the final results
            if(displayStatus===""){

                //console.log("Adding word "+operation_names[i]+" to result");
                search_result_inputs.push(input_names[i]);
            }

        }
    
        //Finally, if the search results are empty; don't show that paper
        if(search_result_inputs.length===0){
            input_paper.style.display = "none";        
        }
    

    }
    else{
        input_paper.style.display = "none";
    }
    
    
    //Filter by Output names
    //--------------------------------------
    if(filter_option[2]===true){
      
        output_paper.style.display = "block";
        
        //For each output name
        for(var i=0; i<output_names.length; i++){

            //Prepare the display status
            var displayStatus = "";

            //For every word we must find
            for (var j = 0; j<words.length; j++) {
                //Check if the word is not inside the operation name
                if(output_names[i].toLowerCase().indexOf(words[j])<0){

                    //If is not, set display to none and stop searching
                    //console.log("Word "+words[j]+" not found in name "+operation_names[i]);
                    displayStatus = "none";
                    j= 1000000; //If somebody input a million words it will break the program; he deserved!


                }
                //If it is inside we continue the search
                //else{

                    //displayStatus = "";
                    //console.log("Word "+words[j]+" found in name "+operation_names[i]);
                //}


            }

            //Update the display status in that element name.
            var element = document.getElementById('searchListItemOutput'+i);
            //console.log("Setting display of Item "+i+" to "+displayStatus);
            element.style.display = displayStatus;

            //If it is display; add it to the final results
            if(displayStatus===""){

                //console.log("Adding word "+operation_names[i]+" to result");
                search_result_outputs.push(output_names[i]);
            }



        }

        //Finally, if the search results are empty; don't show that paper
        if(search_result_outputs.length===0){
            output_paper.style.display = "none";        
        }

        
    }
    else{
        output_paper.style.display = "none";
    }
    
    //Filter by Semantic names
    //--------------------------------------
    if(filter_option[3]===true){
      
        semantic_paper.style.display = "block";
        
        //For each output name
        for(var i=0; i<semantic_concepts.length; i++){

            //Prepare the display status
            var displayStatus = "";

            //For every word we must find
            for (var j = 0; j<words.length; j++) {
                //Check if the word is not inside the operation name
                if(semantic_concepts[i].toLowerCase().indexOf(words[j])<0){

                    //If is not, set display to none and stop searching
                    //console.log("Word "+words[j]+" not found in name "+operation_names[i]);
                    displayStatus = "none";
                    j= 1000000; //If somebody input a million words it will break the program; he deserved!


                }
                //If it is inside we continue the search
                //else{

                    //displayStatus = "";
                    //console.log("Word "+words[j]+" found in name "+operation_names[i]);
                //}


            }

            //Update the display status in that element name.
            var element = document.getElementById('searchListItemSemantic'+i);
            //console.log("Setting display of Item "+i+" to "+displayStatus);
            element.style.display = displayStatus;

            //If it is display; add it to the final results
            if(displayStatus===""){

                //console.log("Adding word "+operation_names[i]+" to result");
                search_result_semantics.push(semantic_concepts[i]);
            }



        }

        //Finally, if the search results are empty; don't show that paper
        if(search_result_semantics.length===0){
            semantic_paper.style.display = "none";        
        }

        
    }
    else{
        semantic_paper.style.display = "none";
    }
    
    
    //console.log("Final result");
    //console.log(search_result);
    
    display_wsdl_list();
    
    
}
            
//What to do when the input search gain focus
function showSearchResults(){
    
    //Grab the elements we need
    var floater = document.getElementById("filter_lister");
    //var paper = document.getElementById("lister_paper");
    var input = document.getElementById("inputWSDL");
    
    var operation_paper = document.getElementById("operation_lister_paper");
    var input_paper = document.getElementById("input_lister_paper");
    var output_paper = document.getElementById("output_lister_paper");
    var semantic_paper = document.getElementById("semantic_lister_paper");
    
    //Make the floater visible
    floater.style.display = 'block';
    
    //Clear the current search
    input.value = "";
    
    
    //Empty the list in the HTML document
    //paper.innerHTML = "";
    
    operation_paper.innerHTML = '';
    input_paper.innerHTML = "";
    output_paper.innerHTML = "";
    semantic_paper.innerHTML = "";
    
    
    //Add every operation name.
    //---------------------------------------------
    operation_paper.innerHTML += '<div id="operationText" class="backgroundText"> OPERATIONS </div>';
    for(var i=0; i<operation_names.length; i++){
        
        operation_paper.innerHTML += '<div id="searchListItemOperation'+i+'" class="searchItem">'+ operation_names[i] + '</div>';
        
    }

    //Make every operation name visible
    for(var i=0; i<operation_names.length; i++){
    
        var element = document.getElementById('searchListItemOperation'+i);
        //console.log("Setting display of Item "+i+" to visible");
        element.style.display = '';
    }



    //Add every input name.
    //---------------------------------------------
    input_paper.innerHTML += '<div id="inputText" class="backgroundText"> INPUTS </div>';
    for(var i=0; i<input_names.length; i++){
        
        input_paper.innerHTML += '<div id="searchListItemInput'+i+'" class="searchItem">'+ input_names[i] + '</div>';
        
    }

    //Make every input name visible
    for(var i=0; i<input_names.length; i++){
    
        var element = document.getElementById('searchListItemInput'+i);
        //console.log("Setting display of Item "+i+" to visible");
        element.style.display = '';
    }

    

    //Add every output name.
    //---------------------------------------------
    output_paper.innerHTML += '<div id="outputText" class="backgroundText"> OUTPUTS </div>';
    for(var i=0; i<output_names.length; i++){
        
        output_paper.innerHTML += '<div id="searchListItemOutput'+i+'" class="searchItem">'+ output_names[i] + '</div>';
        
    }

    //Make every output name visible
    for(var i=0; i<output_names.length; i++){
    
        var element = document.getElementById('searchListItemOutput'+i);
        //console.log("Setting display of Item "+i+" to visible");
        element.style.display = '';
    }

    

    //Add every semantic name.
    //---------------------------------------------
    semantic_paper.innerHTML += '<div id="semanticsText" class="backgroundText"> SEMANTICS </div>';
    for(var i=0; i<semantic_concepts.length; i++){
        
        semantic_paper.innerHTML += '<div id="searchListItemSemantic'+i+'" class="searchItem">'+ semantic_concepts[i] + '</div>';
        
    }

    //Make every output name visible
    for(var i=0; i<semantic_concepts.length; i++){
    
        var element = document.getElementById('searchListItemSemantic'+i);
        //console.log("Setting display of Item "+i+" to visible");
        element.style.display = '';
    }

    


    filterList();
    
};

//What to do when the input search lose focus
function hideSearchResults() {
    var floater = document.getElementById("filter_lister");
    floater.style.display = 'none';
    
};


function collapseWSDL(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "wsdl_menu_right";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "expandWSDL(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var number= id.split("_")[0].split("item")[1];
    
    
    //Change the expand layer of the WSLD; here it will come a list of green divs with the port names.
    var expandLayer = document.getElementById('item'+number+'_expand' );
    expandLayer.innerHTML = "";
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "+";
    
    
}

function expandWSDL(myDiv){ 
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "wsdl_menu_right_ON";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "collapseWSDL(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    
    //Get the numerical ID
    var number= id.split("_")[0].split("item")[1];
    
    
    //Change the expand layer of the WSLD; here it will come a list of green divs with the port names.
    var expandLayer = document.getElementById('item'+number+'_expand' );
    
    expandLayer.innerHTML = "";
    
    //Get the ports for that WSDL.
    var currentPortList = WSDL_list[number].getPortList();
    
    //Add one of these for each port of that WSDL (typically only one port)
    for(var i=0; i<currentPortList.length; i++){
        
        
        var portTitle = '<div id="item'+number+'_port'+i+'_title" class="port_title"> '+ currentPortList[i].getName() +'</div>';
        var portExpand = '<div id="item'+number+'_port'+i+'_expand" class="port_expand" onclick="expandPort(this)">  + </div>';
        
        var portMenu = '<div id="item'+number+'_port'+i+'_menu" class="port_menu"> ' +portTitle + portExpand+ '</div>';
        var portContainer = '<div id="item'+number+'_port'+i+'_container" class="port_container"> </div>';
    
        
        expandLayer.innerHTML += '<div id="item'+number+'_port'+number+'" class="port_body">'+ portMenu + portContainer + '</div>';
        
        
    }

    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "-";

}

function expandOntology(myDiv){
    
    
    //Get the full ID
    var id= myDiv.id;
    
    //Get the ontology ID and the ontology type
    var ontology_id = parseInt(id.split("_")[1]);
    var ontology_type = id.split("_")[0];
    
    //Change the class to the one you can collapse
    var newClass = "semantic_bottom_ON";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "collapseOntology(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Now find the original Ontology, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "-";
    
    //Now we need to do two things. Show the ontologies hanging from this node
    //and the operations hanging from this node:
    
    //Change the expand layer of the Ontology; here it will come the list of blue ontologies and the operations
    var expandLayer = document.getElementById(ontology_type + '_' + ontology_id + '_box');
    expandLayer.innerHTML = "";
    
    //'<div id="op_4_box" class="semantic_box">'+
    //console.log(ontology_id);
    //console.log(ontology_type);
    
    //First lets go for the ontologies:
    var node = The_Ontology.getNodeByID(ontology_id,ontology_type);
    
    //console.log(node.toString());
    
    switch(ontology_type){
        
        case "data":
            break;
				
        case "operation":
            
                //Get the specializations
                var specializations = node.generalizationOf;
            
            
                //For each WSDL lets check it out its operations. If any operation links semantically with this operation ID then we add it
                for(var i=0; i<WSDL_list.length; i++){
                    
                    var wsdlCandidate = WSDL_list[i];
                    var operations = wsdlCandidate.getOperationList();
                    
                    
                    //Lets check inside every operation of that WSDL
                    for(var j=0; j<operations.length; j++){
                        
                        console.log(operations[j].semantic.toString());
                        
                        console.log(operations[j].getSemanticIDs("operation"));
                        
                        //We only care for the semantic links to OPERATION (not TOPIC, not DATA, ...)
                        var operation_semantic_operations = operations[j].getSemanticIDs("operation");
                        
                        //Let check inside every semantic link for that operation
                        for(var k=0; k<operation_semantic_operations.length; k++){
                            
                            //We only care for the EDAM ontologies links
                            if(operation_semantic_operations[k][0]==="edam"){
                                
                                //Finally, check if the operation ID match
                                if(ontology_id === operation_semantic_operations[k][1]){
                                    
                                    //If this happen we plug-in operation <div>
                                    
                                    expandLayer.innerHTML +=                                   

                                            '<div id="item'+i+'_port0_operation'+j+'_body" class="operation_body_TREE">'+            
                                                '<div id="item'+i+'_port0_operation'+j+'_menu" class="operation_menu_TREE">'+
                                                    '<div id="item'+i+'_port0_operation'+j+'_add" class="operation_add_TREE" onclick="addPiece(this);">'+
                                                        '►'+
                                                    '</div>'+
                                                    '<div id="item'+i+'_port0_operation'+j+'_title" class="operation_title_TREE">'+
                                                        operations[j].name +
                                                    '</div>'+
                                                    '<div id="item'+i+'_port0_operation'+j+'_expand" class="operation_expand_TREE" onclick="expandOperationTREE(this);">'+
                                                        '+'+
                                                    '</div>'+
                                                            
                                                '</div>'+
                                                '<div id="item'+i+'_port0_operation'+j+'_container" class="operation_container_TREE">'+            
                                                '</div>'+
                                            '</div>';
                                    
                                }
                                
                            }
                            
                        }
                        
                    }
                    
                }
            
            
                //For each specialization lets make a ontology <div>
                for(var j=0; j<specializations.length; j++){
                    
                    //Get the ontology node
                    var soon_node = specializations[j];
                    
                    //Get the id
                    var soon_id = soon_node.id;
                    
                    //Get the name
                    var soon_name = soon_node.name;
                    
                    expandLayer.innerHTML += 
                                '<div id="operation_'+soon_id+'" class="semantic_operation">'+
                                       '<div id="operation_'+soon_id+'_top" class="semantic_header">'+
                                            '<div id="operation_'+soon_id+'_title" class="semantic_title">'+
                                                soon_name+
                                            '</div>'+
                                            '<div id="operation_'+soon_id+'_expand" class="semantic_bottom" onclick="expandOntology(this)">'+
                                                '+'+
                                            '</div>'+                                
                                        '</div>'+
                                
                                        '<div id="operation_'+soon_id+'_container" class="semantic_container">'+
                                            '<div id="operation_'+soon_id+'_box" class="semantic_box">'+
                                    
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+                
                                '</div>';
                    
                }
            
            
            
            break;
				
        case "format":
            break;
				
        case "topic":
            break;
	
        default:			
            console.error("ONTOLOGY ERROR:\n"+
            "Found a weird node with ontology type"+ontolgy_type+" and ID "+id);
            break;
        
        
        
        
        
        
    }
    
    
    
    
}

function collapseOntology(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Get the ontology ID and the ontology type
    var ontology_id = id.split("_")[1];
    var ontology_type = id.split("_")[0];
    
    //Change the class to the one you can collapse
    var newClass = "semantic_bottom";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "expandOntology(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    
    
    //Change the expand layer of the Ontology to nothing;
    var expandLayer = document.getElementById(ontology_type + '_' + ontology_id + '_box');
    expandLayer.innerHTML = "";
    
    
    //Now find the original Ontology, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "+";
    
    
    
}

function collapsePort(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "port_expand";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "expandPort(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    
    
    //Change the expand layer of the Port; here it will come a list of orange divs with the operations names.
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_container' );
    
    expandLayer.innerHTML = "";
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "+";
    
    
}

function expandPort(myDiv){ 
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "port_expand_ON";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "collapsePort(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    
    //Change the expand layer of the Port; here it will come a list of orange divs with the operations names.
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_container' );
    
    expandLayer.innerHTML = "";
    
    //Get the operations for that port from that WSDL.
    var currentOperationList = WSDL_list[wsdlID].getPortList()[portID].getOperationList();
    
    //Add one of these for each port of that WSDL (typically only one port)
    for(var i=0; i<currentOperationList.length; i++){
        
        var operationBody = '<div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_body" name="'+currentOperationList[i].getName()+'" class="operation_body">';

            var operationMenu = '<div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_menu" class="operation_menu">';
        
                var operationAdd = '<div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_add" class="operation_add" onclick="addPiece(this)"> ► </div>';
                                                        
                var operationTitle = '<div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_title" class="operation_title">'+currentOperationList[i].getName()+'</div>';
    
                var operationExpand = '<div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_expand" class="operation_expand" onclick="expandOperation(this)"> + </div> ';
                                                    
            var operationContainer = ' <div id="item'+wsdlID+'_port'+portID+'_operation'+i+'_container" class="operation_container"> </div>';
        
        
        expandLayer.innerHTML += operationBody + operationMenu + operationAdd + operationTitle + operationExpand + '</div>' +  operationContainer + '</div>';
        
    }

    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "-";
    
    //Now that all operations are set, set them to be invisible, and turn on only those which pass the filter requirements
    if((filter_option[0]   || filter_option[1]   || filter_option[2]   || filter_option[3]||
        input_compatible[0]|| input_compatible[1]|| input_compatible[2]|| input_compatible[3]||
        semantic_option[0] || semantic_option[1] || semantic_option[2] || semantic_option[3])===true){

               console.log("At least one filter");
               
               //Set all to invisible
               for(var i=0; i<currentOperationList.length; i++){

                    var myOperation = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+i+'_body');
                    myOperation.style.display = "none";
            
               }
               
               //Set back visible only those who pass the test
               
               
               //Display back those who have the filter requierements
               for(var i=0; i<currentOperationList.length; i++){
                    
                    var theOperation = currentOperationList[i];
                    var myOperation = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+i+'_body');
                    var myWSDL = document.getElementById('item'+wsdlID);
                    var WSDLName = myWSDL.getAttribute("name");
                    var operationNamePass = false;
                    var inputNamePass = false;
                    var outputNamePass = false;
                    var semanticNamePass = false;
                    var inputCompatiblePass = false;
                    var semanticCorrelatePass = false;
                    
                    //Check if pass the operation requierement
                    if(filter_option[0]===true){
                        
                        for(var j=0; j<search_result_operation.length && operationNamePass===false; j++){
                            //If you have at least one operation with a valid name, you pass the test
                            if(theOperation.name === search_result_operation[j]){
                                operationNamePass = true;
                                console.log("is one of those operations!");
                            }
                        }
                    }
                    else{
                        operationNamePass = true;
                    }
                    
                    //Check if pass the input requierement
                    if(filter_option[1]===true){
                        
                        var operationInputNames = theOperation.getInputsNames();
                            
                        //For each input in the search result
                        for(var k=0; k<search_result_inputs.length && inputNamePass===false; k++){
                                
                            if(operationInputNames.indexOf(search_result_inputs[k])>-1){
                                    
                                inputNamePass = true;
                                    
                            }
                                
                        }

                    }
                    else{
                        inputNamePass = true;
                    }
                           
                    //Check if pass the output requirement
                    if(filter_option[2]===true){
    
                        var operationOutputNames = theOperation.getOutputsNames();
                            
                        //For each output in the search result
                        for(var k=0; k<search_result_outputs.length && outputNamePass===false; k++){
                                
                            if(operationOutputNames.indexOf(search_result_outputs[k])>-1){
                                    
                                outputNamePass = true;
                                    
                            }
                                
                        }
                        
                    }
                    else{
                        outputNamePass = true;
                    }                    
                    
                    //Check if pass the semantic requierment
                    if(filter_option[3]===true){
                        
                        //For each operation
                        var operationSemanticsNames = theOperation.getAllSemantics();
                            
                        //For each input in the search result
                        for(var k=0; k<search_result_semantics.length && semanticNamePass===false; k++){
                                
                            if(operationSemanticsNames.indexOf(search_result_semantics[k])>-1){
                                    
                                semanticNamePass = true;
                                    
                            }
                                
                        }
                        
                    }
                    else{
                        semanticNamePass = true;
                    }
                    
                    
                    //Check if at least one operation pass the input requierements
                    if(The_Workshop.selectedOutput!==null && (input_compatible[0]|| input_compatible[1]|| input_compatible[2]|| input_compatible[3]) === true){
                        
                        var full = false;
                        var possible = false;
                        var maybe = false;
                        var none = false;
                        
                        //For each operation of the WSDL check the compatibility status
                        
                        
                            var operation = theOperation;

                            var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", WSDLName);        
                            auxiliarPiece.initFromOperationWSDL(operation);
                            
                            var inputBoxes = auxiliarPiece.getInputBoxes();
                            
                            //For each of the input of that operation
                            for(var k=0; k<inputBoxes.length; k++){
                            
                                var result = getCompatible(The_Workshop.selectedOutput,inputBoxes[k]);
                                
                                if(result===0){
                                    full = true;
                                }
                                else if(result===1){
                                    possible = true;
                                }
                                else if(result === 2){
                                    maybe = true;
                                }
                                else if(result === 3){
                                    none = true;
                                }
                                else{
                                    console.error("Unknown compatibility!");
                                }
                                
                            }
                            
                            
                        
                    
                        //If all statuses match the filter options, then we are good
                        if(input_compatible[0] === true && full === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[1] === true && possible === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[2] === true && maybe === true){
                            inputCompatiblePass = true;
                        }
                        if(input_compatible[3] === true && none === true){
                            inputCompatiblePass = true;
                        }                        
                    
                        
                    }
                    else{
                        inputCompatiblePass = true;
                        
                    }
                    
                    //Check if at least one operation pass the semantic correlation requierements
                    if((The_Workshop.selectedOutput!==null || The_Workshop.selection!==null) && (semantic_option[0]|| semantic_option[1]|| semantic_option[2]|| semantic_option[3]) === true){
                        
                        var full = false;
                        var possible = false;
                        var maybe = false;
                        var none = false;
                        
                        //For each operation of the WSDL check the compatibility status
                        
                        
                            var operation = theOperation;

                            var auxiliarPiece = new Piece(-1, 5000, 5000, 1,1, '#FFFFFF' , "New Piece", WSDLName);        
                            auxiliarPiece.initFromOperationWSDL(operation);
                            
                            var candidatePiece = null;
                            if(The_Workshop.selectedOutput!==null){
                                candidatePiece = The_Workshop.selectedOutput.parent;
                            }
                            else{
                                candidatePiece = The_Workshop.selection;
                            }
                            
                            var result = getOperationCompatible(candidatePiece,auxiliarPiece);
                                
                            if(result===0){
                                full = true;
                            }
                            else if(result===1){
                                possible = true;
                            }
                            else if(result === 2){
                                maybe = true;
                            }
                            else if(result === 3){
                                none = true;
                            }
                            else{
                                console.error("Unknown compatibility!");
                            }
                            
                        
                    
                        //If all statuses match the filter options, then we are good
                        if(semantic_option[0] === true && full === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[1] === true && possible === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[2] === true && maybe === true){
                            semanticCorrelatePass = true;
                        }
                        if(semantic_option[3] === true && none === true){
                            semanticCorrelatePass = true;
                        }                        
                    
                        
                    }
                    else{
                        semanticCorrelatePass = true;
                        
                    }
                    
                     
                    //If every test is pass, then show the WSDL
                    if((operationNamePass && inputNamePass && outputNamePass &&
                       semanticNamePass && inputCompatiblePass && semanticCorrelatePass) === true){
                   
                       myOperation.style.display = "-webkit-box";
                   
                    } 
               }               

    }

}

function collapseOperation(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "operation_expand";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "expandOperation(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    var operationID = id.split("_")[2].split("operation")[1];
    
    //Change the expand layer of the Port; here it will come a list of orange divs with the operations names.
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "+";    
    
    
    
    
    
    
    
}

function expandOperation(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "operation_expand_ON";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "collapseOperation(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    var operationID = id.split("_")[2].split("operation")[1];
    
        
    //Do the following for the input box
    
    //Get the list of elements
    var inputElementList = WSDL_list[wsdlID].getPortList()[portID].getOperationList()[operationID].getInputElements();
    
    //Get the reference to the expandable div
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    
    var allElementsDivs = "";
    
    //For each input element
    for(var i=0; i<inputElementList.length; i++){


        var elementName = inputElementList[i].getName();
        var elementNameDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'_name" class="element_name">' + elementName +'</div>';

        var elementType = inputElementList[i].getType();
        var elementTypeDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'_name" class="element_type">' + elementType +'</div>';

        var completeElementDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'" class="element">' + elementNameDiv + elementTypeDiv + '</div>';

        allElementsDivs += completeElementDiv;

    }

    var inputContainer = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_container" class="input_container">' + allElementsDivs + '</div>';

    var inputTitle = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_title" class="input_title"> Inputs </div>';
        
    var inputBox = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_box" class="input_box">' + inputTitle + inputContainer + '</div>';
    
    var input = '<div id="item'+wsdlID+'_port'+portID+'_input_operation'+operationID+'" class="input_operation">' + inputBox + '</div>';
            
    expandLayer.innerHTML += input;
    
    
    //Do the following for the output box
    
    
    //Get the list of elements
    var outputElementList = WSDL_list[wsdlID].getPortList()[portID].getOperationList()[operationID].getOutputElements();
    
    /*
    //Get the reference to the expandable div
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    */
    
    var allElementsDivs = "";
    
    //For each output element
    for(var i=0; i<outputElementList.length; i++){


        var elementName = outputElementList[i].getName();
        var elementNameDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'_name" class="element_name">' + elementName +'</div>';

        var elementType = outputElementList[i].getType();
        var elementTypeDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'_name" class="element_type">' + elementType +'</div>';

        var completeElementDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'" class="element">' + elementNameDiv + elementTypeDiv + '</div>';

        allElementsDivs += completeElementDiv;

    }

    var outputContainer = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_container" class="output_container">' + allElementsDivs + '</div>';

    var outputTitle = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_title" class="output_title"> Outputs </div>';
        
    var outputBox = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_box" class="output_box">' + outputTitle + outputContainer + '</div>';
    
    var output = '<div id="item'+wsdlID+'_port'+portID+'_output_operation'+operationID+'" class="output_operation">' + outputBox + '</div>';
            
    expandLayer.innerHTML += output;    
    
    
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "-";
    
    
}

function addPiece(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    var operationID = id.split("_")[2].split("operation")[1];
    
    The_Workshop.addPiece(WSDL_list[wsdlID].portList[portID].operationList[operationID], WSDL_list[wsdlID].name);
    
}

function collapseOperationTREE(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "operation_expand_TREE";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "expandOperationTREE(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    var operationID = id.split("_")[2].split("operation")[1];
    
    //Change the expand layer of the Port; here it will come a list of orange divs with the operations names.
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "+";    
    
    
    
    
    
    
    
}

function expandOperationTREE(myDiv){
    
    //Get the full ID
    var id= myDiv.id;
    
    //Change the class to the one you can collapse
    var newClass = "operation_expand_TREE_ON";
    document.getElementById(id).className=newClass;
    
    //Change the operation for onClick so you can collapse it.
    var newOnClickFunction = "collapseOperationTREE(this)";
    document.getElementById(id).setAttribute("onclick",newOnClickFunction);
    
    //Get the numerical ID
    var wsdlID = id.split("_")[0].split("item")[1];
    var portID= id.split("_")[1].split("port")[1];
    var operationID = id.split("_")[2].split("operation")[1];
    
        
    //Do the following for the input box
    
    //Get the list of elements
    var inputElementList = WSDL_list[wsdlID].getPortList()[portID].getOperationList()[operationID].getInputElements();
    
    //Get the reference to the expandable div
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    
    var allElementsDivs = "";
    
    //For each input element
    for(var i=0; i<inputElementList.length; i++){


        var elementName = inputElementList[i].getName();
        var elementNameDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'_name" class="element_name">' + elementName +'</div>';

        var elementType = inputElementList[i].getType();
        var elementTypeDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'_name" class="element_type">' + elementType +'</div>';

        var completeElementDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_element'+i+'" class="element">' + elementNameDiv + elementTypeDiv + '</div>';

        allElementsDivs += completeElementDiv;

    }

    var inputContainer = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_container" class="input_container_TREE">' + allElementsDivs + '</div>';

    var inputTitle = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_title" class="input_title_TREE"> Inputs </div>';
        
    var inputBox = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_input_box" class="input_box_TREE">' + inputTitle + inputContainer + '</div>';
    
    var input = '<div id="item'+wsdlID+'_port'+portID+'_input_operation'+operationID+'" class="input_operation_TREE">' + inputBox + '</div>';
            
    expandLayer.innerHTML += input;
    
    
    //Do the following for the output box
    
    
    //Get the list of elements
    var outputElementList = WSDL_list[wsdlID].getPortList()[portID].getOperationList()[operationID].getOutputElements();
    
    /*
    //Get the reference to the expandable div
    var expandLayer = document.getElementById('item'+wsdlID+'_port'+portID+'_operation'+operationID+'_container');
    
    expandLayer.innerHTML = "";
    */
    
    var allElementsDivs = "";
    
    //For each output element
    for(var i=0; i<outputElementList.length; i++){


        var elementName = outputElementList[i].getName();
        var elementNameDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'_name" class="element_name">' + elementName +'</div>';

        var elementType = outputElementList[i].getType();
        var elementTypeDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'_name" class="element_type">' + elementType +'</div>';

        var completeElementDiv = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_element'+i+'" class="element">' + elementNameDiv + elementTypeDiv + '</div>';

        allElementsDivs += completeElementDiv;

    }

    var outputContainer = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_container" class="output_container_TREE">' + allElementsDivs + '</div>';

    var outputTitle = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_title" class="output_title_TREE"> Outputs </div>';
        
    var outputBox = '<div id="item'+wsdlID+'_port'+portID+'_operation'+operationID+'_output_box" class="output_box_TREE">' + outputTitle + outputContainer + '</div>';
    
    var output = '<div id="item'+wsdlID+'_port'+portID+'_output_operation'+operationID+'" class="output_operation_TREE">' + outputBox + '</div>';
            
    expandLayer.innerHTML += output;    
    
    
    
    //Now find the original WSDL, get the expand buttom and change the text to "-"
    var originalExpand = document.getElementById(id);
    originalExpand.innerHTML = "-";
    
    
}

function updateFilterStates(){
    
  var foop=document.getElementById('filter_option_operation');
  var foin=document.getElementById('filter_option_input');
  var foout=document.getElementById('filter_option_output');
  var foon=document.getElementById('filter_option_ontology');
  
  var into=document.getElementById('input_compatible_total');
  var inpo=document.getElementById('input_compatible_possible');
  var inne=document.getElementById('input_compatible_neutral');
  var inno=document.getElementById('input_compatible_none');

  var seto=document.getElementById('semantic_option_total');
  var sepo=document.getElementById('semantic_option_possible');
  var sene=document.getElementById('semantic_option_neutral');
  var seno=document.getElementById('semantic_option_none');
    
  filter_option[0] = foop.checked;
  filter_option[1] = foin.checked;
  filter_option[2] = foout.checked;
  filter_option[3] = foon.checked;
  
  input_compatible[0] = into.checked;
  input_compatible[1] = inpo.checked;
  input_compatible[2] = inne.checked;
  input_compatible[3] = inno.checked;
  
  semantic_option[0] = seto.checked;
  semantic_option[1] = sepo.checked;
  semantic_option[2] = sene.checked;
  semantic_option[3] = seno.checked;
  
  //console.log(filter_option);
  //console.log(input_compatible);
  //console.log(semantic_option);
  
  
}

function alignHorizontalLeft(){
    
    The_Workshop.alignHorizontalLeft();
    
}

function alignHorizontalCenter(){
    
    The_Workshop.alignHorizontalCenter();
    
}

function alignHorizontalRight(){
    
    The_Workshop.alignHorizontalRight();
    
}

function alignVerticalTop(){
    
    The_Workshop.alignVerticalTop();
    
}

function alignVerticalCenter(){
    
    The_Workshop.alignVerticalCenter();
    
}

function alignVerticalBottom(){
    
    The_Workshop.alignVerticalBottom();
    
}

function saveImage(){
    
    The_Workshop.saveImage();
    
}

function deleteSelection(){
    
    The_Workshop.deleteSelection();
    
}

function deleteAll(){
    
    The_Workshop.deleteAll();
    
}

function zoomPlus(){
    
    The_Workshop.zoomPlus();
    
}

function zoomMinus(){
    
    The_Workshop.zoomMinus();
    
}

function zoomOne(){
    
    The_Workshop.zoomOne();
    
}

function help(){
    
    window.open('help.html#THE_PROGRAM','Help');
    
}

function save(){
    
    
    //** FOR THE SERVER SIDE
    //   $contents=$_POST['file_contents'];
   //$handle = fopen("/home/user/data/xmlFile.xml, "wb");
   //fwrite($handle, $contents);
    //
    //
    //**/
    
    //w.document.write("tarari");
    
    var xmlhttp=new XMLHttpRequest();   
    
    var url = "/file.txt";
    var params = "<text>tarari</text>";
    xmlhttp.open("POST", url, true);

    //Send the proper header information along with the request
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.setRequestHeader("Content-length", params.length);
    //xmlhttp.setRequestHeader("Connection", "close");

    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            alert(xmlhttp.responseText);
        }
    };

    xmlhttp.send(params);
    
    
    var w =  window.open('/file.txt','Save File');
    
}


}

//___________________________________________
//           MAIN FUNCTIONS
//___________________________________________

function doFirst(){
    //Load the ontology in the Ontology Text global variable
    //Open the file with the ontology
    var xmlhttp=new XMLHttpRequest();        
    xmlhttp.open("GET",ONTOLOGY_FILE,false);
    xmlhttp.send(null);
    var xmlDoc=xmlhttp.responseText;

    //Initialize the ontology object.
    Ontology_Text = xmlDoc;
    The_Ontology = new Ontology(Ontology_Text);
    The_Ontology.init();

    console.log("Ontology Parsed");
    
    //Show the ontology
    //console.log(The_Ontology.toString());
    
    
    //console.log(The_Ontology.distance("data", 2974, 2044));
    //console.log(The_Ontology.distance("data", 2044, 2044));
    //console.log(The_Ontology.distance("data", 2044, 2974));
    //console.log(The_Ontology.distance("data", 1714, 3031));
    
    //console.log(The_Ontology.distanceComplete("topic", 90, 90));
    //console.log(The_Ontology.distanceComplete("topic", 90, 84));
    //console.log(The_Ontology.distanceComplete("topic", 84, 90));
    //console.log(The_Ontology.distanceComplete("topic", 90, 182));
    
    //Get the workshop ready to use
    The_Workshop = new Workshop(document.getElementById('canvas_paper'), The_Ontology);
    The_Workshop.initialize();
    The_Workshop.drawLogo();
    
    console.log("Initilialized Workshop");
    
    setTimeout(doSecond,1); //I need to make a pause to draw the logo properly.
                            //This will be fixed IF javascript allows any concurrence programing.

}


function doSecond(){

    //Open the file with the WSLD directory
    var xmlhttp=new XMLHttpRequest();        
    xmlhttp.open("GET",WSLD_DIRECTORY,false);
    xmlhttp.send(null);
    var xmlDoc=xmlhttp.responseXML;

    console.log("Parsing WSDL names list file");

    var xml_schema = xmlDoc.getElementsByTagName("schema");
    var xml_wsld = xml_schema[0].getElementsByTagName("wsdl");

    //For each WSDL in that file get the WSDL object.
    for(var i=0; i<xml_wsld.length ; i++){

        var WSDL_filename = xml_wsld[i].attributes.getNamedItem("name").nodeValue;
        console.log("Parsing "+WSDL_filename);
        var myWSDL = getWSDL("/WSDLs/"+WSDL_filename);    
        //console.log(myWSDL.toString());
        WSDL_list.push(myWSDL);
        
    }

    //Prepare the DB for semantics
    var SemanticTables = [];
    var SemanticDBs = [];
    var SemanticPerCapita = [];
    var DB = [];

    //For each WSLD show its own DB report
    for(var i=0; i<WSDL_list.length; i++){

        var myTable = WSDL_list[i].getSemanticTable();
        var myDB = WSDL_list[i].getSemanticDB();
        //console.log("Showing semantics report for "+WSDL_list[i].getName());
        //console.log(SemanticTableToString(myTable));
        SemanticTables.push(myTable);
        SemanticDBs.push(myDB);
        DB = DB.concat(myDB);
        SemanticPerCapita = mergeSemanticTable(SemanticPerCapita, myTable);
    }
    //Show the entire DB
    //console.log(DBToString(DB));

    //Prepare the table with semantics statistics
    //Set the each semantics to 0. We are going to meassure the occurences
    //of each semantic per WSDL
    for(var i=0; i<SemanticPerCapita.length; i++){

        SemanticPerCapita[i][1] = 0;

        for(var j=0; j<SemanticTables.length; j++){

            var index = getIndexElementInTable(SemanticTables[j], SemanticPerCapita[i][0]);

            if(index>=0){
                SemanticPerCapita[i][1] += 1;
            }
        }
        SemanticPerCapita[i][1] = SemanticPerCapita[i][1]/SemanticTables.length;
    }

    //Show the result table on the console.
    //console.log(SemanticTableToString(SemanticPerCapita));
    
    
      
    
    //Prepare the list with the operations names and set the search result to all
    
    //Prepare the list with ALL operation names, ALL input names, ALL output names and ALL semantics names
    //Instead of searching in the WSDL we search in here; and if we find it there, THEN we search in the WSDL which is more time expensive.
    
    //We also initialize the search results to everything by default.
    for(var i=0; i<WSDL_list.length; i++){
        
        var myWSDL = WSDL_list[i];
        var operations = myWSDL.getOperationList();
        
        for(var j=0; j<operations.length; j++){
                
            //search_result.push(operations[j].getName());
            
            operation_names.push(operations[j].getName());
            //search_result_operation.push(operations[j].getName());
            
            var inputNames = operations[j].getInputsNames();
            
            //console.log("WSDL: "+myWSDL.name+" operation "+operations[j].getName());
            //console.log("yields this inputs: ");
            //console.log(inputNames);
            
            for(var k=0; k<inputNames.length; k++){
                
                input_names.push(inputNames[k]);
                //search_result_inputs.push(inputNames[k]);
            }
        
            var outputNames = operations[j].getOutputsNames();
            
            for(var k=0; k<outputNames.length; k++){
                
                output_names.push(outputNames[k]);
                //search_result_outputs.push(outputNames[k]);
            }        
        
            var allSemantics = operations[j].getAllSemantics();
            
            for(var k=0; k<allSemantics.length; k++){
                
                semantic_concepts.push(allSemantics[k]);
                //search_result_semantics.push(allSemantics[k]);
                
            }
            
            //TODO: For each of these; eliminate duplicates?
            

            
        }
        
    }

    operation_names = uniqueElements(operation_names);
    input_names = uniqueElements(input_names);
    output_names = uniqueElements(output_names);
    semantic_concepts = uniqueElements(semantic_concepts);

    console.log("Operations-----------");
    console.log(operation_names);
    console.log("Inputs-----------");
    console.log(input_names);
    console.log("Outputs-----------");
    console.log(output_names);
    console.log("Semantics-----------");
    console.log(semantic_concepts);


     
    //console.log(operation_names);
    //console.log(search_result);
    
    //Show the WSDLs
    display_wsdl_list();
    

    
}



window.addEventListener("load",doFirst,false);
//window.addEventListener("load",doSecond,true);

        
            

            
            
        
        