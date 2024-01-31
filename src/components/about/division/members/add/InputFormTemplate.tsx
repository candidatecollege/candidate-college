import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Input from "./atom/Input";
import Label from "./atom/Label";
import Option from "./atom/Option";
import Select from "./atom/Select";
import axios from "axios";
import type { member } from "./FormTemp";
export default function InputFormTemplate({
  state,
}: {
  state: [member, React.Dispatch<React.SetStateAction<member>>];
}) {
  const [divisions, setDivisions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [form, setForm] = state;
  useEffect(() => {
    console.log("NIIII ", form);
    const fetch = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get("/api/divisions");
        setDivisions(data.data.data);

        setForm((prev) => {
          return {
            ...prev,
            position: "Head",
            division_id: data.data.data[0].id,
          };
        });

        console.log(data.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("OKEE");
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <InputForm>
        <Label htmlFor="firstName">First Name &#42;</Label>
        <Input
          value={form?.firstName}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                firstName: e.target.value,
              };
            })
          }
          placeholder="First Name"
          type="text"
          id="firstName"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="lastName">Last Name &#42;</Label>
        <Input
          value={form?.lastName}
          placeholder="Last Name"
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                lastName: e.target.value,
              };
            })
          }
          type="text"
          id="lastName"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="division">Division &#42;</Label>
        <Select
          defaultValue={divisions[0]?.id}
          placeholder="Division"
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                division_id: e.target.value,
              };
            })
          }
          id="division"
        >
          {isLoading ? (
            <Option>Loading...</Option>
          ) : (
            divisions.map(({ name, id }, index) => {
              return (
                <Option value={id} key={index}>
                  {name}
                </Option>
              );
            })
          )}
        </Select>
      </InputForm>
      <InputForm>
        <Label htmlFor="position">Position &#42;</Label>
        <Select
          placeholder="Position"
          defaultValue={"Head"}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                position: e.target.value,
              };
            })
          }
          id="position"
        >
          <Option value={"Head"}>Head</Option>
          <Option value={"Co Head"}>Co Head</Option>
          <Option value={"Staff"}>Staff</Option>
        </Select>
      </InputForm>
      <InputForm>
        <Label htmlFor="linkedinAccount">Linkedin Account &#42;</Label>
        <Input
          value={form?.linkedin}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                linkedin: e.target.value,
              };
            })
          }
          placeholder="Linkedin Account"
          type="text"
          id="linkedinAccount"
        />
      </InputForm>
      <InputForm>
        <Label htmlFor="instagramAccount">Instagram Account &#42;</Label>
        <Input
          value={form?.instagram}
          onChange={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                instagram: e.target.value,
              };
            })
          }
          placeholder="Instagram Account"
          type="text"
          id="instagramAccount"
        />
      </InputForm>
    </>
  );
}
