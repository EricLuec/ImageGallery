require 'net/http'
require 'json'

class VpicApiService
  BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

  def self.get_makes
    url = URI("#{BASE_URL}/GetAllMakes?format=json")
    response = Net::HTTP.get(url)
    JSON.parse(response)
  end

  def self.get_models(make)
    url = URI("#{BASE_URL}/GetModelsForMake/#{make}?format=json")
    response = Net::HTTP.get(url)
    JSON.parse(response)
  end
end
