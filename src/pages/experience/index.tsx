import React from "react";
import Accordeon from "../../components/accordeon";

const Experience = () => {
  return (
    <div className="animate-fade-in flex flex-col gap-y-8 justify-center items-start mt-[2vh] md:mt-[5vh] mb-[15px]">
      <div className="flex flex-col gap-y-2">
        <p className="text-lg md:text-2xl font-semibold md:font-normal">
          <span className="font-bold">Programming languages:</span> JavaScript,
          TypeScript
        </p>
        <p className="text-lg md:text-2xl font-semibold md:font-normal">
          <span className="font-bold">Technologies:</span>
          <p>
            React, Next.js, Modern.js, Redux, Zustand, <br />
            CSS modules, Tailwind CSS, Sass, Less, MUI, AntDesign, <br />
            Jest, Storybook, Cypress, <br />
            Webpack, Rollup, Parcel, Gulp, Workbox
          </p>
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <Accordeon
          items={[
            {
              title: "HalykBank, Kazakhstan",
              elements: [
                {
                  label: [
                    <span key={1}>Frontend TeamLead</span>,
                    <span key={2}>08/2024 – present</span>,
                  ],
                  children: (
                    <ul className="list-disc pl-8">
                      <li>
                        <p>
                          Led a team of 11 frontend developers over 10 months to
                          deliver 18 business-critical processes across multiple
                          banking domains, contributing to a{" "}
                          <span className="font-bold">
                            5% increase in overall bank revenue.
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Established frontend coding standards and integrated
                          performance monitoring with automated webhooks,
                          <span className="font-bold">
                            {
                              " reducing production bugs and build failures by 12% "
                            }
                          </span>
                          while
                          <span className="font-bold">
                            {" improving Lighthouse scores by 8% "}
                          </span>
                          across all projects.
                        </p>
                      </li>
                      <li>
                        <p>
                          Established a structured incident response workflow
                          for frontend outages by developing custom Ivanti APIs
                          and a JavaScript logging library,
                          <span className="font-bold">
                            {" reducing average resolution time by 45%."}
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Implemented advanced PWA features with Workbox in
                          high-traffic React apps,
                          <span className="font-bold">
                            {" decreasing repeat load times by 3.5s "}
                          </span>
                          and enhancing UX via runtime caching, fallback routes,
                          Push API, and Notifications API.
                        </p>
                      </li>
                    </ul>
                  ),
                },
                {
                  label: [
                    <span key={1}>Senior Frontend Developer</span>,
                    <span key={2}>11/2023 – 08/2024</span>,
                  ],
                  children: (
                    <ul className="list-disc pl-8">
                      <li>
                        <p>
                          Implemented an active caching system using KeyDB and a
                          custom API to persist input data across all forms,
                          enabling recovery after incidents and
                          <span className="font-bold">
                            {
                              " reducing average customer processing time by 5 minutes."
                            }
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Architected a frontend application template with
                          pre-configured caching, state management, middleware,
                          routing, and layout components,
                          <span className="font-bold">
                            {
                              " reducing task completion time for developers by at least 2 hours per project."
                            }
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Conducted regular peer code reviews to ensure code
                          quality, enforce best practices, and reduce
                          post-deployment bugs, contributing to a
                          <span className="font-bold">
                            {" 15% decrease in QA issues over two quarters."}
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Designed the migration of a major internal platform to
                          a modular micro-frontend architecture with Modern.js
                          and Module Federation,
                          <span className="font-bold">
                            {" cutting overall build times by 90% "}
                          </span>
                          and enabling independent team deployments.
                        </p>
                      </li>
                    </ul>
                  ),
                },
                {
                  label: [
                    <span key={1}>Middle Frontend Developer</span>,
                    <span key={2}>09/2022 – 11/2023</span>,
                  ],
                  children: (
                    <ul className="list-disc pl-8">
                      <li>
                        <p>
                          Built frontend solutions with React and Next.js to
                          automate 10 banking business processes, contributing
                          to
                          <span className="font-bold">
                            {" over 1 million USD in value "}
                          </span>
                          generated within a year.
                        </p>
                      </li>
                      <li>
                        <p>
                          Refactored and optimized shared component libraries,
                          resolving tree-shaking issues and implementing lazy
                          loading to
                          <span className="font-bold">
                            {
                              " reduce bundle size and initial load times by 80%. "
                            }
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Engineered a layered caching strategy using Service
                          Workers and stale-while-revalidate patterns, reducing
                          repeated API calls from
                          <span className="font-bold">
                            {" over 10,000 to fewer than 100 per month "}
                          </span>
                          in front-facing banking applications.
                        </p>
                      </li>
                    </ul>
                  ),
                },
              ],
            },
            {
              title: "iSATE, Kazakhstan",
              elements: [
                {
                  label: [
                    <span key={1}>Junior Frontend Developer</span>,
                    <span key={2}>09/2020 – 09/2022</span>,
                  ],
                  children: (
                    <ul className="list-disc pl-8">
                      <li>
                        <p>
                          Developed React SPFx web parts for the customer’s
                          intranet portal, enabling self-service for nearly
                          <span className="font-bold">{" 15% "}</span>
                          of HR-related queries and
                          <span className="font-bold">
                            {
                              " saving HR managers approximately 3 hours per week."
                            }
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          Refactored legacy SPFx web parts by migrating from
                          class-based to function-based React components and
                          introducing memoization,
                          <span className="font-bold">
                            {" cutting load times by 11% "}
                          </span>
                          and improving user experience across internal
                          platforms.
                        </p>
                      </li>
                      <li>
                        <p>
                          Enhanced long-term maintainability by integrating
                          TypeScript into core components, leading to faster
                          onboarding for new developers and
                          <span className="font-bold">
                            {" reducing monthly bug tickets by 20%."}
                          </span>
                        </p>
                      </li>
                    </ul>
                  ),
                },
              ],
            },
            {
              title: "KBTU, Kazakhstan",
              elements: [
                {
                  label: [
                    <span key={1}>Senior-Lecturer</span>,
                    <span key={2}>09/2022 – 06/2025</span>,
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

export default Experience;
