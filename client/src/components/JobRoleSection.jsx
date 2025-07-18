import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import illustration from "../assets/images/illustration.png"; // Add your own SVG/PNG

const JobRoleSection = () => {
    const roles = [
        { title: "Full Stack Developer", jobs: "20K+" },
        { title: "Mobile / App Developer", jobs: "3.1K+" },
        { title: "Front End Developer", jobs: "5.2K+" },
        { title: "DevOps Engineer", jobs: "3.2K+" },
        { title: "Engineering Manager", jobs: "1.6K+" },
        { title: "Technical Lead", jobs: "11.2K+" },
    ];

    return (
        <Wrapper>
            <div className="left">
                <img src={illustration} alt="Discover Jobs" />
                <h3>Discover jobs across popular roles</h3>
                <p>Select a role and we'll show you relevant jobs for it!</p>
            </div>

            <div className="right">
                {roles.map((role, index) => (
                    <div key={index} className="card">
                        <div>
                            <h4>{role.title}</h4>
                            <span>{role.jobs} Jobs</span>
                        </div>
                        <ChevronRight size={20} />
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: #fff7f1;
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;

  .left {
    flex: 1;
    max-width: 400px;

    img {
      width: 100px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    p {
      color: #555;
    }
  }

  .right {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }

  .card {
    background: #fff;
    border: 1px solid #e5e7eb;
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;

    h4 {
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      color: #666;
      font-size: 0.875rem;
    }

    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
`;


export default JobRoleSection;
