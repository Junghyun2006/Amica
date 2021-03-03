json.extract! server, :id, :name, :host_id
json.photoUrl url_for(server.photo) if server.photo.attached?
json.channels server.channels.map(&:id)