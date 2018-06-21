import * as mongoose from "mongoose";

const POISchema = new mongoose.Schema({
    name: String,
    // Lon, then lat
    geo: [ Number, Number ],
    type: String
});

// POISchema.index({ 'geo': '2dsphere' });
export const POI = mongoose.model("POI", POISchema);
