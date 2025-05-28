import React from "react";
import Accordeon from "../../components/accordeon";

const Education = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-y-8 justify-center items-start py-[10%] md:pt-0">
      <div className="flex flex-col gap-y-2">
        <Accordeon
          items={[
            {
              title: "Kazakh-British Technical University",
              elements: [
                {
                  label: [
                    <span key={1}>
                      PhD in Computer Science and Artificial Intelligence
                    </span>,
                    <span key={2}>09/2023 - present</span>,
                  ],
                  collapsible: false,
                },
                {
                  label: [
                    <span key={1}>
                      MS in Computer Science -
                      <span className="font-bold">{" GPA 3.8/4"}</span>
                    </span>,
                    <span key={2}>09/2021 - 06/2023</span>,
                  ],
                  collapsible: false,
                },
                {
                  label: [
                    <span key={1}>
                      BS in Computer Science -
                      <span className="font-bold">{" GPA 3.4/4"}</span>
                    </span>,
                    <span key={2}>09/2017 - 06/2021</span>,
                  ],
                  collapsible: false,
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
