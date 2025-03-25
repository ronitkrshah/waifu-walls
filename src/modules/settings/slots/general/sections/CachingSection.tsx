import SectionBase from "../SectionBase";
import { ClearImageCache } from "./caching";

export default function CachingSection() {
  return (
    <SectionBase title="Caching">
      <ClearImageCache />
    </SectionBase>
  );
}
