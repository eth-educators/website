# This plugin will print the input to the console/terminal
# 
# Usage:
#   {{ my_collection | print }}

require 'rainbow'

module Jekyll
  module Print

    def print(input)
      puts Rainbow(input).cyan
      input
    end

  end
end

Liquid::Template.register_filter(Jekyll::Print)