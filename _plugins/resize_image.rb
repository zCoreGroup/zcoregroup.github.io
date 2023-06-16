# _plugins/resize_image.rb
require 'mini_magick'

module Jekyll
  class ResizeImage < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @path = text.strip
    end

    def render(context)
      # Define the path of the image
      image_path = File.join(context.registers[:site].source, @path)

      # Open the image with MiniMagick
      image = MiniMagick::Image.open(image_path)

      # Define the sizes for the responsive image
      sizes = [480, 800, 1366]

      # Create resized images for each size
      sizes.each do |size|
        resize_path = image_path.gsub(/(\.\w+)$/, "_#{size}\\1")
        image.resize "#{size}x#{size}"
        image.write resize_path
      end

      # Return a picture element with source for each size
      "<picture>
        #{sizes.map { |size| "<source media='(max-width: #{size}px)' srcset='#{@path.gsub(/(\.\w+)$/, "_#{size}\\1")}' />" }.join("\n")}
        <img src='#{@path}' />
      </picture>"
    end
  end
end

Liquid::Template.register_tag('resize_image', Jekyll::ResizeImage)
