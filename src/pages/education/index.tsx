import { Anchor } from "@/components";
import React from "react";
import Accordeon from "../../components/accordeon";

const Education = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-y-8 justify-center items-start mt-[2vh] md:mt-[5vh] mb-[15px]">
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
      <div className="flex flex-col gap-y-2">
        <div className="text-lg md:text-2xl font-semibold md:font-normal">
          <span className="font-bold">Publications:</span>
          <ol className="list-decimal font-light pl-[25px]">
            <li>
              <span className="font-semibold">
                Duisek, B. E., Sarsembin, D. D., & Abdurazak, K. A. (2023).
              </span>
              <br />
              COMPARISON AND ANALYSIS OF DIFFERENT MACHINE LEARNING METHODS ON
              <br />
              ASTEROID DIAMETER PREDICTIONS BASED ON THE NASA SMALL CELESTIAL
              <br />
              BODIES DATABASE.
              <p className="italic">
                {
                  " Herald of Kazakh-British Technical University, 20(3), 7–16. "
                }
              </p>
              <Anchor href="https://doi.org/10.55452/1998-6688-2023-20-3-7-16">
                https://doi.org/10.55452/1998-6688-2023-20-3-7-16
              </Anchor>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
