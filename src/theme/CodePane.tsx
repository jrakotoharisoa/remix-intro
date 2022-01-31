import { CodePane } from 'spectacle';
import styled from 'styled-components';

type CodePaneProps = {
  language: string;
  theme?: Record<string, unknown>;
  stepIndex?: number;
  highlightRanges?: number | (number | number[])[];
  showLineNumbers?: boolean;
  className?: string;
};

const Container = styled.div`
  position: relative;
  & > *:last-child {
    background-color: rgb(30, 30, 30);
    padding-top: 20px;
    border-radius: 10px;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 32px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8%2BCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDYyIDEyIiB3aWR0aD0iNjIiIGhlaWdodD0iMTIiPgoJPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjYiIGZpbGw9IiNmZjVhNTIiPjwvY2lyY2xlPgoJPGNpcmNsZSBjeD0iMjYiIGN5PSI2IiByPSI2IiBmaWxsPSIjZTZjMDI4Ij48L2NpcmNsZT4KCTxjaXJjbGUgY3g9IjQ2IiBjeT0iNiIgcj0iNiIgZmlsbD0iIzU0YzIyYiI%2BPC9jaXJjbGU%2BCjwvc3ZnPg%3D%3D);
    background-position: 14px 14px;
    background-repeat: no-repeat;
    background-color: inherit;
  }
`;

export const Code: React.FC<CodePaneProps> = (props) => (
  <Container className={props.className}>
    <CodePane {...props} />
  </Container>
);
