export interface IFeteMusique {
  datasetid: string;
  recordid: string;
  fields: Fields;
  geometry: Geometry;
}

interface Geometry {
  type: string;
  coordinates: number[];
}

  interface Fields {
  lasttimeend: string;
  uid: string;
  range_en: string;
  label_multivalued: string;
  location_countrycode: string;
  description_fr: string;
  title_fr: string;
  location_city: string;
  timings_end: string;
  location_name: string;
  location_department: string;
  location_region: string;
  html_fr: string;
  firsttimeend: string;
  longdescription_en: string;
  updatedat: string;
  location_postalcode: string;
  location_uid: string;
  tags: string;
  html_en: string;
  title_en: string;
  description_en: string;
  title_es: string;
  location_country_fr: string;
  description_es: string;
  html_es: string;
  slug: string;
  range_fr: string;
  lastdate: string;
  canonicalurl: string;
  firsttimestart: string;
  taggroups: string;
  timings: string;
  location_insee: string;
  longdescription_fr: string;
  longdescription_es: string;
  origin_uid: string;
  lasttimestart: string;
  firstdate: string;
  location_address: string;
  location_coordinates: number[];
}