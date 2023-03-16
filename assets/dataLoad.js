csv_loc =
  "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv";

const parseTime = d3.timeParse("%Y-%m-%d");

function groupDataByLocation(csv_loc, property) {
valueArr = d3.csv(csv_loc).then(function (data) {
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d.total_cases = +d.total_cases;
      d.new_cases = +d.new_cases;
      d.new_cases_smoothed = +d.new_cases_smoothed;
      d.total_deaths = +d.total_deaths;
      d.new_deaths = +d.new_deaths;
      d.new_deaths_smoothed = +d.new_deaths_smoothed;
      d.total_cases_per_million = +d.total_cases_per_million;
      d.new_cases_per_million = +d.new_cases_per_million;
      d.new_cases_smoothed_per_million = +d.new_cases_smoothed_per_million;
      d.total_deaths_per_million = +d.total_deaths_per_million;
      d.new_deaths_per_million = +d.new_deaths_per_million;
      d.new_deaths_smoothed_per_million = +d.new_deaths_smoothed_per_million;
      d.reproduction_rate = +d.reproduction_rate;
      d.icu_patients = +d.icu_patients;
      d.icu_patients_per_million = +d.icu_patients_per_million;
      d.hosp_patients = +d.hosp_patients;
      d.hosp_patients_per_million = +d.hosp_patients_per_million;
      d.weekly_icu_admissions = +d.weekly_icu_admissions;
      d.weekly_icu_admissions_per_million =
        +d.weekly_icu_admissions_per_million;
      d.weekly_hosp_admissions = +d.weekly_hosp_admissions;
      d.weekly_hosp_admissions_per_million =
        +d.weekly_hosp_admissions_per_million;
      d.total_tests = +d.total_tests;
      d.new_tests = +d.new_tests;
      d.total_tests_per_thousand = +d.total_tests_per_thousand;
      d.new_tests_per_thousand = +d.new_tests_per_thousand;
      d.new_tests_smoothed = +d.new_tests_smoothed;
      d.new_tests_smoothed_per_thousand = +d.new_tests_smoothed_per_thousand;
      d.positive_rate = +d.positive_rate;
      d.tests_per_case = +d.tests_per_case;
      d.tests_units = +d.tests_units;
      d.total_vaccinations = +d.total_vaccinations;
      d.people_vaccinated = +d.people_vaccinated;
      d.people_fully_vaccinated = +d.people_fully_vaccinated;
      d.total_boosters = +d.total_boosters;
      d.new_vaccinations = +d.new_vaccinations;
      d.new_vaccinations_smoothed = +d.new_vaccinations_smoothed;
      d.total_vaccinations_per_hundred = +d.total_vaccinations_per_hundred;
      d.people_vaccinated_per_hundred = +d.people_vaccinated_per_hundred;
      d.people_fully_vaccinated_per_hundred =
        +d.people_fully_vaccinated_per_hundred;
      d.total_boosters_per_hundred = +d.total_boosters_per_hundred;
      d.new_vaccinations_smoothed_per_million =
        +d.new_vaccinations_smoothed_per_million;
      d.new_people_vaccinated_smoothed = +d.new_people_vaccinated_smoothed;
      d.new_people_vaccinated_smoothed_per_hundred =
        +d.new_people_vaccinated_smoothed_per_hundred;
      d.stringency_index = +d.stringency_index;
      d.population = +d.population;
      d.population_density = +d.population_density;
      d.median_age = +d.median_age;
      d.aged_65_older = +d.aged_65_older;
      d.aged_70_older = +d.aged_70_older;
      d.gdp_per_capita = +d.gdp_per_capita;
      d.extreme_poverty = +d.extreme_poverty;
      d.cardiovasc_death_rate = +d.cardiovasc_death_rate;
      d.diabetes_prevalence = +d.diabetes_prevalence;
      d.female_smokers = +d.female_smokers;
      d.male_smokers = +d.male_smokers;
      d.handwashing_facilities = +d.handwashing_facilities;
      d.hospital_beds_per_thousand = +d.hospital_beds_per_thousand;
      d.life_expectancy = +d.life_expectancy;
      d.human_development_index = +d.human_development_index;
      d.excess_mortality_cumulative_absolute =
        +d.excess_mortality_cumulative_absolute;
      d.excess_mortality_cumulative = +d.excess_mortality_cumulative;
      d.excess_mortality = +d.excess_mortality;
      d.excess_mortality_cumulative_per_million =
        +d.excess_mortality_cumulative_per_million;
    });

    var dataLocationMap = d3.group(data, (d) => d.location);
    var valueArr = [];

    dataLocationMap.forEach(function (d, i) {
      var property_data = d.map(function (d) {
        return d[property];
      });
      var jsonData = {};
      jsonData["key"] = i;
      jsonData["value"] = d3.sum(property_data);
      jsonData["property"] = property;
      valueArr.push(jsonData);
    });
    return valueArr;
  });
  return valueArr;
}
//fetch_total_by_iso

function groupDataByISO(csv_loc, property) {
  stats = d3.csv(csv_loc).then(function (data) {
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d.total_cases = +d.total_cases;
      d.new_cases = +d.new_cases;
      d.new_cases_smoothed = +d.new_cases_smoothed;
      d.total_deaths = +d.total_deaths;
      d.new_deaths = +d.new_deaths;
      d.new_deaths_smoothed = +d.new_deaths_smoothed;
      d.total_cases_per_million = +d.total_cases_per_million;
      d.new_cases_per_million = +d.new_cases_per_million;
      d.new_cases_smoothed_per_million = +d.new_cases_smoothed_per_million;
      d.total_deaths_per_million = +d.total_deaths_per_million;
      d.new_deaths_per_million = +d.new_deaths_per_million;
      d.new_deaths_smoothed_per_million = +d.new_deaths_smoothed_per_million;
      d.reproduction_rate = +d.reproduction_rate;
      d.icu_patients = +d.icu_patients;
      d.icu_patients_per_million = +d.icu_patients_per_million;
      d.hosp_patients = +d.hosp_patients;
      d.hosp_patients_per_million = +d.hosp_patients_per_million;
      d.weekly_icu_admissions = +d.weekly_icu_admissions;
      d.weekly_icu_admissions_per_million =
        +d.weekly_icu_admissions_per_million;
      d.weekly_hosp_admissions = +d.weekly_hosp_admissions;
      d.weekly_hosp_admissions_per_million =
        +d.weekly_hosp_admissions_per_million;
      d.total_tests = +d.total_tests;
      d.new_tests = +d.new_tests;
      d.total_tests_per_thousand = +d.total_tests_per_thousand;
      d.new_tests_per_thousand = +d.new_tests_per_thousand;
      d.new_tests_smoothed = +d.new_tests_smoothed;
      d.new_tests_smoothed_per_thousand = +d.new_tests_smoothed_per_thousand;
      d.positive_rate = +d.positive_rate;
      d.tests_per_case = +d.tests_per_case;
      d.tests_units = +d.tests_units;
      d.total_vaccinations = +d.total_vaccinations;
      d.people_vaccinated = +d.people_vaccinated;
      d.people_fully_vaccinated = +d.people_fully_vaccinated;
      d.total_boosters = +d.total_boosters;
      d.new_vaccinations = +d.new_vaccinations;
      d.new_vaccinations_smoothed = +d.new_vaccinations_smoothed;
      d.total_vaccinations_per_hundred = +d.total_vaccinations_per_hundred;
      d.people_vaccinated_per_hundred = +d.people_vaccinated_per_hundred;
      d.people_fully_vaccinated_per_hundred =
        +d.people_fully_vaccinated_per_hundred;
      d.total_boosters_per_hundred = +d.total_boosters_per_hundred;
      d.new_vaccinations_smoothed_per_million =
        +d.new_vaccinations_smoothed_per_million;
      d.new_people_vaccinated_smoothed = +d.new_people_vaccinated_smoothed;
      d.new_people_vaccinated_smoothed_per_hundred =
        +d.new_people_vaccinated_smoothed_per_hundred;
      d.stringency_index = +d.stringency_index;
      d.population = +d.population;
      d.population_density = +d.population_density;
      d.median_age = +d.median_age;
      d.aged_65_older = +d.aged_65_older;
      d.aged_70_older = +d.aged_70_older;
      d.gdp_per_capita = +d.gdp_per_capita;
      d.extreme_poverty = +d.extreme_poverty;
      d.cardiovasc_death_rate = +d.cardiovasc_death_rate;
      d.diabetes_prevalence = +d.diabetes_prevalence;
      d.female_smokers = +d.female_smokers;
      d.male_smokers = +d.male_smokers;
      d.handwashing_facilities = +d.handwashing_facilities;
      d.hospital_beds_per_thousand = +d.hospital_beds_per_thousand;
      d.life_expectancy = +d.life_expectancy;
      d.human_development_index = +d.human_development_index;
      d.excess_mortality_cumulative_absolute =
        +d.excess_mortality_cumulative_absolute;
      d.excess_mortality_cumulative = +d.excess_mortality_cumulative;
      d.excess_mortality = +d.excess_mortality;
      d.excess_mortality_cumulative_per_million =
        +d.excess_mortality_cumulative_per_million;
    });

    var dataISOMap = d3.group(data, (d) => d.iso_code);
    var results = [];

    dataISOMap.forEach(function (d, i) {
      var property_data = d.map(function (d) {
        return d[property];
      });
      var jsonData = {};
      jsonData["key"] = i;
      jsonData["value"] = d3.sum(property_data);
      jsonData["property"] = property;
      results.push(jsonData);
    });

    console.log("Final stats:", results);
    return results;
  });
  return stats;
}


function filterDatabyProperties(
    csv_path,
    properties,
    location_selected
  ) {
    const parseTime = d3.timeParse("%Y-%m-%d");
  
    final_data = d3.csv(csv_path).then(function (data) {
      var property_data = data.map(function (d) {
        var jsonData = {};
        jsonData["date"] = parseTime(d.date);
        jsonData["location"] = d.location;
  
        properties.forEach(function (prop, i) {
          jsonData[prop] = +d[prop];
        });
  
        return jsonData;
      });
  
      //filter data
      filtered_data = property_data.filter((d) => d.location == location_selected);
      console.log("Filetered Data: ", filtered_data);
      return filtered_data;
    });
    return final_data;
  }


  function filterDataBySingleProperty(csv_loc, country, property) {
    const parseTime = d3.timeParse("%Y-%m-%d");
  
    final_data = d3.csv(csv_loc).then(function (data) {
      data.forEach(function (d) {
        d.date = parseTime(d.date);
        d[property] = +d[property];
        //console.log("d[property]", d[property]);
      });
  
      filtered = data.filter(function (d) {
        return d.location == country;
      });
  
      var property_data = filtered.map(function (d) {
        return {
          property: d[property],
          date: d.date,
        };
      });
  
      var final_data = [];
  
      property_data.forEach(function (d) {
        var jsonData = {};
        jsonData["location"] = country;
        jsonData["property"] = property;
        jsonData["value"] = d.property;
        jsonData["date"] = d["date"];
        final_data.push(jsonData);
        //console.log("Json Data", jsonData);
      });
  
      console.log("Final Data", final_data);
      return final_data;
    });
    return final_data;
  }


  csv_path =
  "https://raw.githubusercontent.com/mzashin/HW_F21DV/main/CourseProject/assets/Exercises/Lab3/dataset/owid-covid-data.csv";

function groupDataByLocation(csv_path, property) {
  stats = d3.csv(csv_loc).then(function (data) {
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d.total_cases = +d.total_cases;
      d.new_cases = +d.new_cases;
      d.new_cases_smoothed = +d.new_cases_smoothed;
      d.total_deaths = +d.total_deaths;
      d.new_deaths = +d.new_deaths;
      d.new_deaths_smoothed = +d.new_deaths_smoothed;
      d.total_cases_per_million = +d.total_cases_per_million;
      d.new_cases_per_million = +d.new_cases_per_million;
      d.new_cases_smoothed_per_million = +d.new_cases_smoothed_per_million;
      d.total_deaths_per_million = +d.total_deaths_per_million;
      d.new_deaths_per_million = +d.new_deaths_per_million;
      d.new_deaths_smoothed_per_million = +d.new_deaths_smoothed_per_million;
      d.reproduction_rate = +d.reproduction_rate;
      d.icu_patients = +d.icu_patients;
      d.icu_patients_per_million = +d.icu_patients_per_million;
      d.hosp_patients = +d.hosp_patients;
      d.hosp_patients_per_million = +d.hosp_patients_per_million;
      d.weekly_icu_admissions = +d.weekly_icu_admissions;
      d.weekly_icu_admissions_per_million =
        +d.weekly_icu_admissions_per_million;
      d.weekly_hosp_admissions = +d.weekly_hosp_admissions;
      d.weekly_hosp_admissions_per_million =
        +d.weekly_hosp_admissions_per_million;
      d.total_tests = +d.total_tests;
      d.new_tests = +d.new_tests;
      d.total_tests_per_thousand = +d.total_tests_per_thousand;
      d.new_tests_per_thousand = +d.new_tests_per_thousand;
      d.new_tests_smoothed = +d.new_tests_smoothed;
      d.new_tests_smoothed_per_thousand = +d.new_tests_smoothed_per_thousand;
      d.positive_rate = +d.positive_rate;
      d.tests_per_case = +d.tests_per_case;
      d.tests_units = +d.tests_units;
      d.total_vaccinations = +d.total_vaccinations;
      d.people_vaccinated = +d.people_vaccinated;
      d.people_fully_vaccinated = +d.people_fully_vaccinated;
      d.total_boosters = +d.total_boosters;
      d.new_vaccinations = +d.new_vaccinations;
      d.new_vaccinations_smoothed = +d.new_vaccinations_smoothed;
      d.total_vaccinations_per_hundred = +d.total_vaccinations_per_hundred;
      d.people_vaccinated_per_hundred = +d.people_vaccinated_per_hundred;
      d.people_fully_vaccinated_per_hundred =
        +d.people_fully_vaccinated_per_hundred;
      d.total_boosters_per_hundred = +d.total_boosters_per_hundred;
      d.new_vaccinations_smoothed_per_million =
        +d.new_vaccinations_smoothed_per_million;
      d.new_people_vaccinated_smoothed = +d.new_people_vaccinated_smoothed;
      d.new_people_vaccinated_smoothed_per_hundred =
        +d.new_people_vaccinated_smoothed_per_hundred;
      d.stringency_index = +d.stringency_index;
      d.population = +d.population;
      d.population_density = +d.population_density;
      d.median_age = +d.median_age;
      d.aged_65_older = +d.aged_65_older;
      d.aged_70_older = +d.aged_70_older;
      d.gdp_per_capita = +d.gdp_per_capita;
      d.extreme_poverty = +d.extreme_poverty;
      d.cardiovasc_death_rate = +d.cardiovasc_death_rate;
      d.diabetes_prevalence = +d.diabetes_prevalence;
      d.female_smokers = +d.female_smokers;
      d.male_smokers = +d.male_smokers;
      d.handwashing_facilities = +d.handwashing_facilities;
      d.hospital_beds_per_thousand = +d.hospital_beds_per_thousand;
      d.life_expectancy = +d.life_expectancy;
      d.human_development_index = +d.human_development_index;
      d.excess_mortality_cumulative_absolute =
        +d.excess_mortality_cumulative_absolute;
      d.excess_mortality_cumulative = +d.excess_mortality_cumulative;
      d.excess_mortality = +d.excess_mortality;
      d.excess_mortality_cumulative_per_million =
        +d.excess_mortality_cumulative_per_million;
    });

    var dataNest = d3.group(data, (d) => d.location);
    var stats = [];

    dataNest.forEach(function (d, i) {
      //console.log("DATANEST record:",i," ,",d);
      var property_data = d.map(function (d) {
        //console.log("d[property]", d[property]);
        return d[property];
      });
      //console.log("property_data record:",i," ,",property_data);
      console.log("sum property_data record:", i, " ,", d3.sum(property_data));
      var jsonData = {};
      jsonData["key"] = i;
      jsonData["value"] = d3.sum(property_data);
      jsonData["property"] = property;
      stats.push(jsonData);
    });

    console.log("Final stats:", stats);
    return stats;
  });
  return stats;
}

function lookupCountryHumanDevelopmentIndex(country_code) {
  
    final_data = d3.csv(csv_loc).then(function (data) {
      var property_data = data.map(function (d) {
        if (parseFloat(d["human_development_index"]) >= 0.8) {
          index_grp_key = "VHI";
        }
        if (parseFloat(d["human_development_index"]) >= 0.7 && parseFloat(d["human_development_index"]) <= 0.8) {
            index_grp_key = "HI";
        }
        if (parseFloat(d["human_development_index"]) >= 0.55 && parseFloat(d["human_development_index"]) <= 0.7) {
            index_grp_key = "MI";
        }
        if (parseFloat(d["human_development_index"]) < 0.55) {
            index_grp_key = "LI";
        }
  
        return {
          country_code: d["Country Code"],
          country_name: d["Country Name"],
          income_grp_key: income_grp_key,
          income_grp_name: d["IncomeGroup"],
          region: d["Region"],
        };
      });
  
      if (country_code == "ALL") {
        return property_data;
      } else {
        filtered = property_data.filter(function (d) {
          return d.country_code == country_code;
        });
  
        return filtered;
      }
    });
    console.log("Final data", final_data);
    return final_data;
  }
