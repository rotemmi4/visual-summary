import { Container,Card,Button } from 'react-bootstrap'
import {Link} from "react-router-dom";
import {useState} from "react";
import { get_test_id } from "../../model/requests/StudentModelRestAPI";

/**
 * Change this for manual test!
 * @type {string}
 */
const TEST_ID = "hi im test ID"

export function StudentExplanationPage(){

    const [studentTestID, setStudentTestID] = useState("")

    const StartTest = () => {

        get_random_test_id().then( response => setStudentTestID(response.data));

    }

    // let ax = useAxiosGet('http://127.0.0.1:5000/student/get_test_id');

    function get_random_test_id() {
        let chosen_test = TEST_ID;
        chosen_test = get_test_id();
        return chosen_test
    }

    let find_test = null
    if(studentTestID != ""){
        find_test=
            <div>
                <Link to={`/Student/Test/${studentTestID}isbefore`} >
                      <Button variant="primary" >
                          Start the test!
                      </Button>
                  </Link>
            </div>
    }
    else{
        find_test=
        <div>
                <Button variant="warning" onClick={StartTest}>
                    Generate the test!
                </Button>
        </div>
    }

    return (
        <Container className="mb-3 my-5 " >

            <Card >
              <Card.Body className="mb-3 my-5 " >
                <Card.Title className="text-center mb-3">
                    <h2>
                        Test Instructions
                    </h2>
                </Card.Title>
                <Card.Text className="align-items-center justify-content-center ">
                  Welcome to our test!
                    <br/><br/>
                    we here to check which of the visualizations is the best.<br/>
                    so first of all you gonna get a text with some visualization and then answer on few questions.<br/>
                    this you gonna make 12 time.<br/>
                    after you finish all texts, you will need to degree the best visualization for you by choosing a score from 1 to 5.<br/>
                    <br/><br/>
                    Thanks for all support!<br/>
                </Card.Text>
                  {/*<Link to={`/Student/Test/${studentTestID}`} >*/}
                  {/*    <Button variant="primary" onClick={StartTest}>*/}
                  {/*        Start the test!*/}
                  {/*    </Button>*/}
                  {/*</Link>*/}
                  {find_test}

              </Card.Body>
            </Card>


        </Container>
    )


}