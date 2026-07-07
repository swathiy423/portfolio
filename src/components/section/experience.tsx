import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const experiences = [
    {
      role: 'Student Coordinator',
      org: 'Sambhram Institute of Technology, Bangalore',
      period: 'Final-year student',
      bullets: [
        'Coordinated faculty and student teams, delegated tasks, and managed event logistics to ensure smooth execution of college events.',
        'Organized schedules and oversaw on-the-day operations, resolving issues quickly to keep events on track.',
        'Designed and published the college newsletter, coordinating content contributions and ensuring timely distribution.'
      ]
    },
    {
      role: 'Team Lead — Smart India Hackathon',
      org: 'National-level Hackathon',
      period: '36-hour build',
      bullets: [
        'Led a six-person team to design and deliver a working prototype under a 36-hour constraint.',
        'Coordinated technical implementation and presentation to meet a government challenge brief.'
      ]
    },
    {
      role: 'Team Member — SAP Hackathon',
      org: 'SAP',
      period: '',
      bullets: [
        'Conceptualized and validated a business-focused solution.',
        'Led pitching and presentation efforts, advancing the project to the final round.'
      ]
    },
    {
      role: 'Participant — Her Aura Entrepreneurship Program',
      org: 'Wadhwani Foundation',
      period: '',
      bullets: [
        'Completed an entrepreneurship development program, applying innovation and problem-solving frameworks to prototype business ideas and strengthen leadership capabilities.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 relative"
      style={{
        background: themeColors.background.sections?.experience || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out'
      }}
    >
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Experience &amp; Leadership
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg p-6"
              style={{
                backgroundColor: themeColors.card.background,
                border: `1px solid ${themeColors.card.border}`
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.dark[700] }}
                >
                  {exp.role}
                </h3>
                {exp.period && (
                  <span
                    className="text-sm font-medium"
                    style={{ color: themeColors.colors.pink[500] }}
                  >
                    {exp.period}
                  </span>
                )}
              </div>
              <p
                className="text-sm mb-4"
                style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}
              >
                {exp.org}
              </p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, bIndex) => (
                  <li
                    key={bIndex}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                    style={{ color: isDarkMode ? themeColors.colors.white : themeColors.text.secondary }}
                  >
                    <span className="mt-1" style={{ color: themeColors.colors.pink[500] }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
