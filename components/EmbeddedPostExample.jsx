import { FacebookProvider, EmbeddedPost } from "react-facebook";

export default function EmbeddedPostExample() {
  return (
    <FacebookProvider appId="1148372425660789">
      <EmbeddedPost href="http://www.facebook.com" width="500" />
    </FacebookProvider>
  );
}
