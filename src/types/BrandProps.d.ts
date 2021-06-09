/**
 * An interface for a Brand.
 */
interface BrandProps {
  id: string;
  title: string;
  image_url: string;
  description?: string;
  external_link?: string;
}