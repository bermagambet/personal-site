import React from 'react';
import Accordeon from '../../components/accordeon';

const Education = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-y-8 justify-center items-start">
      <div className="flex flex-col gap-y-2">
        <Accordeon
          items={[
            {
              title: 'Kazakh-British Technical University',
              elements: [
                {
                  label: [
                    <span>
                      PhD in Computer Science and Artificial Intelligence
                    </span>,
                    <span>09/2023 - present</span>,
                  ],
                  collapsible: false,
                },
                {
                  label: [
                    <span>MS in Computer Science - GPA 3.8/4</span>,
                    <span>09/2021 - 06/2023</span>,
                  ],
                  collapsible: false,
                },
                {
                  label: [
                    <span>BS in Computer Science - GPA 3.4/4</span>,
                    <span>09/2017 - 06/2021</span>,
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
