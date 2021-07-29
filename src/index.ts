import axios from "axios";
import { Company, FormatType } from "./types";

export class Usfundamentals {
  baseUrl = "https://api.usfundamentals.com/v1";
  constructor(private token: string, private format: FormatType = "json") {}
  URLBuilder = (path: string, queries: string[] = []): string => {
    return (
      this.baseUrl +
      path +
      `?token=${this.token}&format=${this.format}` +
      queries?.map((query) => `&${query}`)
    );
  };
  Companies = async (companies: string[] = []): Promise<Company[]> => {
    const companiesString = companies.map((CIK) => CIK.trim()).join(",");
    const url = this.URLBuilder("/companies/xbrl/", [
      companiesString ? `companies=${companiesString}` : "",
    ]);
    console.log(url);
    const data = (await axios.get(url)).data;
    return data;
  };
  Indicators = async () => {
    const url = this.URLBuilder("/v1/indicators/xbrl");
    const data = (await axios.get(url)).data;
    return data;
  };
}
