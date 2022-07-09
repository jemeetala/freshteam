import React from "react";

import { Column, Row, Image, Text, Stack, List, Button } from "components";
import { postEmployeeList, getEmployees } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const EmployeesPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  React.useEffect(() => {
    callApi2();
  }, []);

  function callApi1() {
    const req = {};
    postEmployeeList(req)
      .then((res) => {
        setapiData1(res);

        toast.success("INSERTED SUCCESSFULLY");
      })
      .catch((err) => {
        console.error(err);
        toast.error("NOT INSERTED");
      });
  }
  function callApi2() {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] pr-[1px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
            <Row className="border border-bluegray_200 border-solid items-center justify-center lg:pb-[6px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[19px] xl:pr-[22px] pr-[25px] 3xl:pr-[30px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%]">
              <Image
                src={"images/img_vector.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] xl:mb-[1px] lg:mb-[1px] mb-[2px] mt-[0] object-contain w-[18%]"
                alt="Vector"
              />
              <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]">
                Employees
              </Text>
            </Row>
            <Text className="border border-bluegray_200 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[34%]">
              Search your employees...
            </Text>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[356px] xl:ml-[407px] ml-[458px] 3xl:ml-[549px] w-[3%]">
              <div className="absolute bg-bluegray_900 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Image
                src={"images/img_vector_1.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[40%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Image
                src={"images/img_vector_2.png"}
                className="absolute lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Image
                src={"images/img_vector_3.png"}
                className="absolute bottom-[5%] lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] inset-x-[0] mx-[auto] object-contain w-[79%]"
                alt="Vector"
              />
            </Stack>
            <Stack className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:my-[1px] lg:my-[1px] my-[2px] w-[3%]">
              <div className="absolute bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius192 w-[100%]"></div>
              <Image
                src={"images/img_1.png"}
                className="absolute bottom-[31%] xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] inset-x-[0] mx-[auto] object-contain w-[13%]"
                alt="1"
              />
            </Stack>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] w-[3%]">
              <div className="absolute bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius2132 w-[100%]"></div>
              <Image
                src={"images/img_profilename.png"}
                className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[29%]"
                alt="ProfileName"
              />
            </Stack>
          </Row>
        </header>
        <Column className="font-inter items-start justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] outline outline-[1px] outline-gray_201 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] w-[100%]">
          <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-start justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Image
                src={"images/img_title.png"}
                className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                alt="Title"
              />
              <Row className="bg-gray_50 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pr-[106px] xl:pr-[121px] pr-[137px] 3xl:pr-[164px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[16%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                  Name
                </Text>
                <Image
                  src={"images/img_.png"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] object-contain w-[21%]"
                  alt=""
                />
              </Row>
              <Row className="bg-gray_50 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[16%]">
                <Text className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                  Designation
                </Text>
                <Image
                  src={"images/img__2.png"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] ml-[93px] object-contain w-[5%]"
                  alt=""
                />
              </Row>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Status
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Time
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Joining Date
              </Text>
              <Text className="bg-gray_50 border-bw05 border-gray_201 border-solid font-bold lg:leading-[14px] xl:leading-[16px] leading-[18.00px] 2xl:leading-[18px] 3xl:leading-[21px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    {apiData2?.response?.first_name}
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  {apiData2?.response?.designation}
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                    {apiData2?.response?.status}
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2400
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  {apiData2?.response?.joining_date}
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_1.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Prototype
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Pulvinar eu facilisis turpis imperdiet sed.
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                    Pending
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1000
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-06-29
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_2.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Inspect
                  </Text>
                </Column>
                <Button className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal not-italic py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center tracking-ls1 w-[16%]">
                  consectetur adipiscing elit,
                </Button>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                    Approve
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0900
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-04-23
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_3.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Content
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sed do eiusmod tempor incididunt
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Booked
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2100
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-22
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_4.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Effects
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  quis nostrud exercitation ullamco laboris
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-deep_orange_50 border-bw05 border-red_700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-red_700 tracking-ls1 w-[auto]">
                    Cancelled
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0300
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-04
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_5.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Export
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  sunt in culpa qui officia
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-orange_50 border-bw05 border-orange_800 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-orange_800 tracking-ls1 w-[auto]">
                    Pending
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1100
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-03-22
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_6.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[auto]">
                    Auto layout
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Ut enim ad minim veniam
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-light_green_50 border-bw05 border-light_green_A700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_green_A700 tracking-ls1 w-[auto]">
                    Approve
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  1800
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-02-13
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
              <Row className="items-center justify-evenly my-[0] w-[100%]">
                <Image
                  src={"images/img_content_7.png"}
                  className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-contain w-[5%]"
                  alt="Content"
                />
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Text
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  Excepteur sint occaecat cupidatat non
                </Text>
                <Column className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="bg-blue_50 border-bw05 border-light_blue_A700 border-solid font-normal lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] rounded-radius4 text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Booked
                  </Text>
                </Column>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  0400
                </Text>
                <Text className="bg-white_A700 border-bw05 border-gray_201 border-solid font-normal lg:leading-[17px] xl:leading-[19px] leading-[22.00px] 2xl:leading-[22px] 3xl:leading-[26px] not-italic lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left tracking-ls1 w-[16%]">
                  2022-01-16
                </Text>
                <Row className="bg-white_A700 border-bw05 border-gray_201 border-solid items-center justify-center lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] xl:pr-[110px] pr-[124px] 3xl:pr-[148px] lg:pr-[96px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] w-[16%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Edit
                  </Text>
                  <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-light_blue_A700 tracking-ls1 w-[auto]">
                    Details
                  </Text>
                </Row>
              </Row>
            </List>
          </Column>
          <Column className="font-sourcesanspro items-center lg:mt-[105px] xl:mt-[120px] mt-[136px] 3xl:mt-[163px] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[48px] xl:pr-[55px] pr-[62px] 3xl:pr-[74px] w-[100%]">
            <Column className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pb-[6px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] lg:pl-[450px] xl:pl-[515px] pl-[579px] 3xl:pl-[695px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] w-[100%]">
              <Button
                className="common-pointer bg-bluegray_900 border border-gray_202 border-solid font-normal not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[16%]"
                onClick={() => {
                  callApi1();
                }}
              >
                Sync All Employee
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default EmployeesPage;
