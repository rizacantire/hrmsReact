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
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Statusss</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
              <Table.Cell textAlign="right">Noness</Table.Cell>ss
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
