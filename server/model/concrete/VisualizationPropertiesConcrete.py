from model.db import sqlliteDButils
from model.dao import VisualiztionPropertiesDAO
from model.dao import VisualiztionDAO


def insert_visualization_properties(properties):
    queryVisualizationID = VisualiztionDAO.get_visualiztion_by_type("\""+get_visualization_type(properties.visualizationType)+"\"")
    VisualizationID = sqlliteDButils.execute_select(queryVisualizationID)
    id= VisualizationID[0]["id"]
    queryVisualizationProperties= VisualiztionPropertiesDAO.insert(properties.testName,properties.textID,id,properties.propName,properties.propVal,properties.propType)
    val=[properties.testName,properties.textID,id,properties.propName,properties.propVal,properties.propType]
    return sqlliteDButils.execute_run(queryVisualizationProperties,val)


def get_visualization_type(visualization):
    if (visualization == "Without Visualization"):
        return "WithoutVisualization"
    elif (visualization == "Highlight"):
        return "Highlight"
    elif (visualization == "Gradual Highlight"):
        return "GradualHighlight"
    elif (visualization == "Increased Font"):
        return "IncreasedFont"
    elif (visualization == "Gradual Font"):
        return "GradualFont"
    elif (visualization == "Summary Only"):
        return "SummaryOnly"
