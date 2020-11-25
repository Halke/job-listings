import React from 'react'
import account from "../../../images/account.svg";
import eyecamCo from "../../../images/eyecam-co.svg";
import faceIt from "../../../images/faceit.svg";
import insure from "../../../images/insure.svg";
import loopStudios from "../../../images/loop-studios.svg";
import manage from "../../../images/manage.svg";
import myHome from "../../../images/myhome.svg";
import photosnap from "../../../images/photosnap.svg";
import shortly from "../../../images/shortly.svg";
import theAirFilterCompany from "../../../images/the-air-filter-company.svg";


const images = new Map();
images.set("Account", account);
images.set("Eyecam Co.", eyecamCo);
images.set("FaceIt", faceIt);
images.set("Insure", insure);
images.set("Loop Studios", loopStudios);
images.set("Manage", manage);
images.set("MyHome", myHome);
images.set("Photosnap", photosnap);
images.set("Shortly", shortly);
images.set("The Air Filter Company", theAirFilterCompany);

function Image({companyName}) {

    return <img src={images.get(companyName)} alt="Company logo" />
}

export default Image
