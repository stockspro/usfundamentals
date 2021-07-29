export type FormatType = "json" | "csv";

/**
 * @company_id Trim CIK
 */
export type Company = {
  company_id: string;
  name_latest: string;
  names_previous: string;
};

export type Frequency = "q" | "y";
