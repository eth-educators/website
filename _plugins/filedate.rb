# This plugin will return the
# 
# Usage:
#   {{ file.path | filedate }}

module Jekyll
  module FileDate

    def filedate(input)
      # Modification datetime
      # File.mtime(input)
      # File creation datetime
      File.birthtime(input)
    end

  end
end

Liquid::Template.register_filter(Jekyll::FileDate)