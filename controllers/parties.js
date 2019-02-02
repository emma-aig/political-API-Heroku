import party from "../database/database2";

// Get a specific political party
export function getParty (req, res) {
    const id = parseInt(req.params.id, 10);
    party.map((partyRecord) => {
        if (partyRecord.id === id) {
            return res.status(200).send({
                success: "true",
                // message: "Data retrieved successfully",
                party: partyRecord,
            });
        } 
    });
    return res.status(404).send({
        success: "false",
        message: "Political party does not exist",
    });
}

// Get all political parties
export function getParties (req, res) {
    res.status(200).send({
        success: "true",
        // message: "Political parties retrieved successfully",
        party: party,
    });
}

export function deleteParty (req, res) {
    const id = parseInt(req.params.id, 10);  
    party.map((partyData, index) => {
        if (partyData.id === id) {
            party.splice(index, 1);
            return res.status(200).send({
                success: "true",
                message: "Political party deleted successfuly",
            });
        }
    });  
  
    return res.status(404).send({
        success: "false",
        message: "Political party does not exist",
    }); 
}

// Edit a political party 
export function editParty (req, res) {
    const id = parseInt(req.params.id, 10);  
    let foundParty;
    let partyIndex;
    party.map((partyRecord, index) => {
        if (partyRecord.id === id) {
            foundParty = partyRecord;
            partyIndex = index; 
        }
    });

    if (!foundParty) {
        return res.status(404).send({
            success: "false",
            message: "Political party not does not exist",
        });
    }

    if(!req.body.name) {
        return res.status(404).send({
            success: "false",
            message: "Party name is required",
        });
    }
    const updatePartyRecord = {
        id: foundParty.id,
        name: req.body.name || foundParty.name,
        hqAddress: req.body.hqAddress || foundParty.hqAddress,
        logoURL: req.body.logoURL || foundParty.logoURL,
    };

    party.splice(partyIndex, 1, updatePartyRecord);
    return res.status(201).send({
        success: "true",
        message: "Political party edited successfully",
    }); 
}

// Create a political party
export function createParty (req, res) {
    if(!req.body.name) {
        return res.status(400).send({
            success: "false",
            message: "Party name is required",
        });
    } else if(!req.body.hqAddress) {
        return res.status(400).send({
            success: "false",
            message: "Head quarter address is required",
        });
    }
    else if(!req.body.logoURL) {
        return res.status(400).send({
            success: "false",
            message: "Logo URL is required",
        });
    }
    
    const partyData = {
        id: party.length + 1,
        name: req.body.name,
        hqAddress: req.body.hqAddress,
        logoURL: req.body.logoURL,
    };
    party.push(partyData);
    return res.status(201).send({
        success: "true",
        message: "Political party created successfully",
        // party: party,
    });
}
