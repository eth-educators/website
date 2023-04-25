# This plugin will get the publish/update date for select domains
# 
# Usage:
#   url = The URL endpoint to query
#   {%- assign date = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" | getdate | date: "%b %d, %Y" -%}

require 'net/http'
require 'rainbow'

module Jekyll
  module GetDate

    def getdate(url)
      # preflight check on whether to process
      whitelist = ["medium.com/","youtube.com/","github.com/","https://ethereum.org/"]
      process = false
      whitelist.any? { |word| 
        url.include?(word) ? (process = true) : nil
      }
      process ? nil : return

      # enabled = Jekyll.configuration({})['enable_getdate']
      enabled = @context.registers[:site].config['enable_getdate']
      # puts "enable_getdate = #{enabled}"
      res = Net::HTTP.get_response(URI.parse(url))
      status200 = res.kind_of? Net::HTTPSuccess
      if !status200
        puts Rainbow("Failed: getdate('#{url}')").yellow
        return
      end

      begin
        if (url.include? "medium.com/")
          return getdate_markdown(res.body)
        end

        if url.include?("youtube.com/") || url.include?("youtu.be/")
          return getdate_youtube(res.body)
        end

        if url.include?("github.com/")
          return getdate_github(res.body)
        end

        if url.include?("https://ethereum.org/")
          return getdate_ethdotorg(res.body)
        end
      rescue
        puts Rainbow("Failed: getdate('#{url}')").yellow
      end

    end

    def getdate_markdown(body)
      from = 'property="article:published_time" content="'
      to = '"'
      include_from = false
      include_to = false
      date = body.split(from,2)[1].split(to,2)[0]
      date = include_from ? (include_from + date) : date
      date = include_to ? (date + include_to) : date
      date
    end

    def getdate_youtube(body)
      from = '"publishDate":{"simpleText":"'
      to = '"'
      include_from = false
      include_to = false
      date = body.split(from,2)[1].split(to,2)[0]
      date = include_from ? (include_from + date) : date
      date = include_to ? (date + include_to) : date
      date
    end

    def getdate_github(body)
      from = 'datetime="'
      to = '"'
      include_from = false
      include_to = false
      date = body.split(from,2)[1].split(to,2)[0]
      date = include_from ? (include_from + date) : date
      date = include_to ? (date + include_to) : date
      date
    end

    def getdate_ethdotorg(body)
      from = 'Website last updated<!-- -->:<!-- --> <!-- -->'
      to = '</div>'
      include_from = false
      include_to = false
      date = body.split(from,2)[1].split(to,2)[0]
      date = include_from ? (include_from + date) : date
      date = include_to ? (date + include_to) : date
      date
    end

  end
end

Liquid::Template.register_filter(Jekyll::GetDate)