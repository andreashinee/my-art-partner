import React, {useState, useEffect} from 'react';
import * as partnerService from '../../../services/partner-service';
import PartnerItem from '../partners-item/PartnerItem';

function PartnerList() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    partnerService.getPartners()
    .then(partners => setPartners(partners))
    .catch(error => console.error(error));
  }, [])


}

export default PartnerList