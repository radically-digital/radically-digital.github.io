Every system must be tested fully to ensure that it fulfils the requirements of the user, to ensure it is as bug free and performant as possible and to ensure that it does not expose sensitive data to malicious external actors (e.g. ‘hackers’). Testing enables systems to run on the scientific principle of falsifiability. A system can never be proven to be 100% bug free but one failing test means a system does not work as intended and should not be deployed.

Historically, software was tested manually by quality assurance personnel who would run step by step through testing scripts. This not only was monotonous for the tester but was also time consuming and hugely prone to human error. Reliance purely on manual testing has since become a thing of the past.

As a Radical Engineer aims to automate almost everything they will strive to automate as much systems testing as possible. These automated tests should be programmed to run as part of a continuous integration pipeline and so will be run at the very least before every deployment to production.

In addition to manual testing which should be carried out at least once on all features of the application the quality assurance engineer or software engineer can also write automated tests.

Manual tests are great for functionality that will only be tested once e.g. a hotfix that is just a temporary fix until a more permanent one gets put in place. Additionally, Integration or end to end tests (more on these later) should not be automated if it's not covering a flow that would be frequently followed by a user. If it is a very rarely followed flow then the value provided through test automation will not match up to the time spent creating the automation. There are exceptions to this and these will occur on a team-by-team basis.

In the vast majority of cases each test will be able to be automated. This does not, however, mean that manual testing is redundant. Each feature created should be manually verified to be working once to add additional assurance and to confirm that the automated tests themselves are working as planned. This manual test phase may be scrapped in exceptionally mature teams who have implemented excellent and extensive automated testing and who’s previous manual tester highlighted issues in almost 0% of cases.

In the many cases where manual testing is required this should happen only after all automated testing has run. This means that manual testers will not have to tediously test and highlight bugs that an automated system would catch thus freeing up the manual testers time and reducing the lead time.

All tests that will be repeated and are not a one-off test or covering an unusual flow or requirement should be automated. This may take a little bit more time at first but will save a huge amount of manual testing time in the long run. Plus, it's common to write tests using a test driven development approach in a way that actually speeds up feature development time.
