// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import vanligSporsmal from "./vanligSporsmal";
import relatertInnhold from "./relatertInnhold";
import tema from "./tema";
import temainnhold from "./temainnhold";
import stegForSteg from "./stegForSteg";
import steg from "./steg";
import infofelt from "./infofelt";
import relatertInnholdLenke from "./relatertInnholdLenke";
import ingressPermitteringVedStreik from "./ingressPermitteringVedStreik";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "schema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    infofelt,
    relatertInnhold,
    relatertInnholdLenke,
    steg,
    stegForSteg,
    tema,
    temainnhold,
    vanligSporsmal,
      ingressPermitteringVedStreik,
  ]),
});
