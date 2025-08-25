import { map } from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Select } from '../../components/select.component';
import { DISTRICTS_API, PROVINCES_API, WARDS_API } from '../../utilities/constant';
import { useGetDistricts } from '../../utilities/data-hooks/use-get-districts.hook';
import { useGetProvinces } from '../../utilities/data-hooks/use-get-provices.hook';
import { useGetWards } from '../../utilities/data-hooks/use-get-wards.hook';

const Field = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const AddressSelector = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectWard, setSelectedWard] = useState(null);

  const { provinces } = useGetProvinces();
  const { districts } = useGetDistricts(selectedProvince);
  const { wards } = useGetWards(selectedDistrict);

  const handleChangeProvice = provinceCode => {
    setSelectedProvince(provinceCode);
    setSelectedDistrict(null);
    setSelectedWard(null);
  };

  const handleChangeDistrict = districtCode => {
    setSelectedDistrict(districtCode);
    setSelectedWard(null);
  };

  return (
    <>
      <Field>
        <Select placeholder="Province / City" onChange={handleChangeProvice} value={selectedProvince}>
          {map(provinces, pro => (
            <Select.Option key={pro.code} value={pro.code}>
              {pro.name}
            </Select.Option>
          ))}
        </Select>
      </Field>

      <Field>
        <Select
          placeholder="District"
          onChange={handleChangeDistrict}
          value={selectedDistrict}
          disabled={!districts.length}
        >
          {map(districts, dist => (
            <Select.Option key={dist.code} value={dist.code}>
              {dist.name}
            </Select.Option>
          ))}
        </Select>
      </Field>

      <Field>
        <Select placeholder="Ward / Commune" disabled={!wards.length} onChange={setSelectedWard} value={selectWard}>
          {map(wards, ward => (
            <Select.Option key={ward.code} value={ward.code}>
              {ward.name}
            </Select.Option>
          ))}
        </Select>
      </Field>
    </>
  );
};
