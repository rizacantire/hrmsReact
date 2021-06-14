import React, {useEffect, useState } from "react";
import CityService from "../services/cityService";
import { Table } from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Şehir Adı</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row key={city.id}>
              <Table.Cell>{city.id}</Table.Cell>
              <Table.Cell>{city.name}</Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
