import { Container, Paper, styled } from "@mui/material";

const PostContentStyles = styled("div")(({ theme }) => ({
  h1: {
    ...theme.typography.h1,
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  h2: {
    ...theme.typography.h2,
    fontSize: "1.875rem",
    marginBottom: "1.5rem",
  },
  h3: {
    ...theme.typography.h3,
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
  h4: {
    ...theme.typography.h4,
    fontSize: "1.25rem",
  },
  h5: {
    ...theme.typography.h5,
    fontSize: "1.125rem",
  },
  h6: {
    ...theme.typography.h6,
    fontSize: "1.125rem",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "#333",
    fontWeight: "bold",
  },
  p: {
    ...theme.typography.body1,
    fontSize: "1.125rem",
  },
  blockquote: {
    ...theme.components?.MuiPaper,
    background: theme.palette.gradient.default,
    color: theme.palette.common.white,
    borderLeft: `10px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(2),
    margin: 0,
    position: "relative",
    borderRadius: "4px",
  },
  "blockquote cite": {
    display: "block",
    textAlign: "right",
    fontSize: "14px",
    color: "#fff",
    marginTop: "5px",
  },
  "blockquote p": {
    color: theme.palette.common.white,
  },
  "a, a:visited": {
    background: `linear-gradient(to bottom, ${theme.palette.info.main} 0%, ${theme.palette.info.main} 100%)`,
    backgroundPosition: "0 100%",
    backgroundRepeat: "repeat-x",
    backgroundSize: "4px 4px",
    textDecoration: "none",
    transition: "all 0.2s",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    padding: "0 2px",
    margin: "0 2.5px",
  },
  "a:hover, a:active, a:focus": {
    backgroundSize: "4px 50px",
    color: theme.palette.common.white,
  },
  code: {
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: "14px",
    backgroundColor: "#f5f5f5",
    padding: "2px 4px",
    border: "1px solid #ccc",
    color: "#333",
  },
  "pre code": {
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    fontSize: "14px",
    color: "#333",
    border: "none",
    whiteSpace: "pre",
    overflowX: "auto",
  },
  pre: {
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    overflow: "auto",
  },
}));

export interface PostContentProps {
  content: string;
}

export default function PostContent(props: PostContentProps) {
  return (
    <Paper>
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <PostContentStyles
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></PostContentStyles>
      </Container>
    </Paper>
  );
}
