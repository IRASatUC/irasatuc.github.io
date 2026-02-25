import ProfileUI from '../../reusables/ProfileUI/ProfileUI';
import {
  People_contents_faculty,
  People_contents_students,
  People_contents_staffs,
  People_contents_colaborating_faculty_within_UC,
  People_contents_colaborating_faculty_outside_UC
} from '../../contents/People_contents/People_content';

const header_and_source = [
  { header: "Faculty", source: People_contents_faculty },
  { header: "Collaborating Faculty within UC", source: People_contents_colaborating_faculty_within_UC },
  { header: "Collaborating Faculty outside UC", source: People_contents_colaborating_faculty_outside_UC },
  { header: "Staff", source: People_contents_staffs },
  { header: "Students", source: People_contents_students }
];

export default function People() {
  return (
    <div className='People px-[20px] no-hamburger:px-[50px]'>
      <div>
        <h1 className="font-bold text-[4em] underline -mt-[1rem] mb-2 text-center no-hamburger:text-left">
          People
        </h1>

      
        <ul>
          {header_and_source.map((section, i) => (
            <li key={i}>
              {/* tighter spacing between headers */}
              <h2 className="text-[2em] font-bold mt-20 mb-3 text-center no-hamburger:text-left">
                {section.header}
              </h2>

              {/* 3 per row on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
                {section.source.map((person, idx) => (
                  <ProfileUI
                    key={idx}
                    imgUrl={person.imgUrl}
                    title={person.title}
                    subtitle={person.subtitle}
                    name={person.name}
                    description={person.description}
                    website={person.website}
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

