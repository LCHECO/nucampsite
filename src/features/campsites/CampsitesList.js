import { Col, Row } from 'reactstrap';
import CampSiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={campsite.id}
                        
                        >
                            <CampSiteCard campsite={campsite} /> 
                    </Col>
                );
            })}
        </Row>
    )
}

export default CampsitesList;