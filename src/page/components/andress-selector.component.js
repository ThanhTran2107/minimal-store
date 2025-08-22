import { Select } from "../../components/select.component";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  PROVINCES_API,
  DISTRICTS_API,
  WARDS_API,
} from "../../utilities/constant";
import { map } from "lodash";

const Field = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const AddressSelector = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  useEffect(() => {
    fetch(PROVINCES_API)
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((e) => console.error(e));
  }, []);

  const handleProvinceChange = (provinceCode) => {
    setSelectedProvince(provinceCode);
    setDistricts([]);
    setWards([]);

    fetch(DISTRICTS_API(provinceCode))
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts))
      .catch((e) => console.error(e));
  };

  const handleDistrictChange = (districtCode) => {
    setSelectedDistrict(districtCode);
    setWards([]);

    fetch(WARDS_API(districtCode))
      .then((res) => res.json())
      .then((data) => setWards(data.wards))
      .catch((e) => console.error(e));
  };

  return (
    <>
      <Field>
        <Select
          placeholder="Province / City"
          onChange={handleProvinceChange}
          value={selectedProvince}
        >
          {map(provinces, (pro) => (
            <Select.Option key={pro.code} value={pro.code}>
              {pro.name}
            </Select.Option>
          ))}
        </Select>
      </Field>

      <Field>
        <Select
          placeholder="District"
          onChange={handleDistrictChange}
          value={selectedDistrict}
          disabled={!districts.length}
        >
          {map(districts, (dist) => (
            <Select.Option key={dist.code} value={dist.code}>
              {dist.name}
            </Select.Option>
          ))}
        </Select>
      </Field>

      <Field>
        <Select placeholder="Ward / Commune" disabled={!wards.length}>
          {map(wards, (ward) => (
            <Select.Option key={ward.code} value={ward.code}>
              {ward.name}
            </Select.Option>
          ))}
        </Select>
      </Field>
    </>
  );
};
