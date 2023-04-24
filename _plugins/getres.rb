# This plugin will call a URL and return the response body
# 
# Usage:
#   url = The URL endpoint to query
#   {%- assign response = "https://rhinoreview.substack.com/feed" | getres -%}

require 'net/http'
require 'rainbow'

module Jekyll
  module GetRes

    def getres(url)
      puts Rainbow("Fetching data: getres('#{url}')").green
      res = Net::HTTP.get_response(URI.parse(url))
      if !res.kind_of? Net::HTTPSuccess
        abort("ERROR: Fetch failed: getres('#{url}')")
      end
      res.body
    end

  end
end

Liquid::Template.register_filter(Jekyll::GetRes)