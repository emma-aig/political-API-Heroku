import office from "../database/database";

export function getOffice (req, res) {
    const id = parseInt(req.params.id, 10);
    office.map((officeReord) => {
        if (officeReord.id === id) {
            return res.status(200).send({
                success: "true",
                // message: "Political office retrieved successfully",
                office: officeReord,
            });
        } 
    });
    return res.status(404).send({
        success: "false",
        message: "Political office does not exist",
    });
}


// Get all political officies
export function getOffices (req, res) {
    res.status(200).send({
        success: "true",
        //message: "Political office retrieved successfully",
        office: office,
    });
}

// Create a political office
export function createOffice (req, res) { 
    if(!req.body.type) {
        return res.status(400).send({
            success: "false",
            message: "type is required",
        });
    }
    if(!req.body.name) {
        return res.status(400).send({
            success: "false",
            message: "name is required",
        });
    }
    const officeData = {
        id: office.length + 1,
        type: req.body.type,
        name: req.body.name
    };
    office.push(officeData);
    return res.status(201).send({
        success: "true",
        message: "Political Office created successfully",
        // office: office,
    });
}
