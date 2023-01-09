//
//  Replies.swift
//  SwiftActorsUI
//
//  Created by Chrision Wynaar on 11/7/22.
//

import Foundation

struct SearchResult : Codable, Hashable {
    let id : String
    let resultType : String
    let image : String
    let title : String
    let description : String
    
    init() {
        id = ""
        resultType = ""
        image = ""
        title = ""
        description = ""
    }
}

struct SearchReply : Codable {
    let searchType : String
    let expression : String
    let results : [SearchResult]
    let errorMessage : String
    
    init() {
        searchType = ""
        expression = ""
        results = []
        errorMessage = ""
    }
}

struct Actor : Codable, Hashable {
    let id : String
    let image : String
    let name : String
    let asCharacter : String
    
    init() {
        id = ""
        image = ""
        name = ""
        asCharacter = ""
    }
    
    init(withId id : String) {
        self.id = id
        image = ""
        name = ""
        asCharacter = ""
    }
}

struct SeriesData : Codable {
    let id : String
    let title : String
    let year : String
    let image : String
    let plot : String
    let actorList : [Actor]
    
    init() {
        id = ""
        title = ""
        year = ""
        image = ""
        plot = ""
        actorList = []
    }
}

struct Role : Codable, Hashable {
    let id : String
    let title : String
    let role : String
    
    init() {
        id = ""
        title = ""
        role = ""
    }
}

struct ActorBio : Codable {
    let id : String
    let name : String
    let image : String
    let summary : String
    let knownFor : [Role]
    
    init() {
        id = ""
        name = ""
        image = ""
        summary = ""
        knownFor = []
    }
}

struct Favorite : Codable, Hashable {
    var id : String
    var name : String
    
    init() {
        id = ""
        name = ""
    }
}


class Model : ObservableObject {
    
    //ObservableObject always has a @published variable
    
    @Published var reply : SearchReply!
    var item : SearchResult!
    var details : SeriesData!
    var actor : Actor!
    
    func getDetailsSeries(series id :String) async -> SeriesData {
        let key = "k_syj7s5f9"
        let urlStr = "https://imdb-api.com/en/API/Title/\(key)/\(id)/FullActor,"
        let url = URL(string: urlStr)
        
        let (data, response) = try! await URLSession.shared.data(from : url!)
        return try! JSONDecoder().decode(SeriesData.self, from: data)
    }
    
    
    func doMoviesSearch(Mname m : String) async -> SearchReply{
        let escapedString = m.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)
        let key = "k_syj7s5f9"
        let urlStr = "https://imdb-api.com/en/API/SearchMovie/\(key)/\(escapedString!)"
        let url = URL(string: urlStr)
        
        let (data, response) = try! await URLSession.shared.data(from: url!)
        return try! JSONDecoder().decode(SearchReply.self, from: data)
        
    }
    
    func doSeriesSearch(Sname s : String) async -> SearchReply {
        
        let escapedString = s.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed)
        let key = "k_syj7s5f9"
        let urlStr = "https://imdb-api.com/en/API/SearchSeries/\(key)/\(escapedString!)"
        let url = URL(string: urlStr)
        
        let (data, response) = try! await URLSession.shared.data(from: url!)
        
        return try! JSONDecoder().decode(SearchReply.self, from: data)
        
    }
    
    
    func getActorDetails(Aname a : String) async -> ActorBio{
        let key = "k_syj7s5f9"
        let urlStr = "https://imdb-api.com/en/API/Name/\(key)/\(a)"
        let url = URL(string: urlStr)
        
        let (data, resonse) = try! await URLSession.shared.data(from: url!)
        return try! JSONDecoder().decode(ActorBio.self, from: data)
        
    }
    
}

import UIKit

class AppData {
    var favorites : [Favorite]
    static let instance : AppData = AppData()
    
    let itemArchiveURL: URL = {
        let documentsDirectories =
            FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        let documentDirectory = documentsDirectories.first!
        return documentDirectory.appendingPathComponent("favorites.plist")
    }()
    
    init() {
        do {
            let data = try Data(contentsOf: itemArchiveURL)
            let unarchiver = PropertyListDecoder()
            let loc = try unarchiver.decode(Array<Favorite>.self, from: data)
            favorites =  loc
        } catch {
            favorites = []
        }

        let nc = NotificationCenter.default
        nc.addObserver(self,
                       selector: #selector(saveChanges),
                       name: UIApplication.didEnterBackgroundNotification,
                       object: nil)
    }
    
    @objc func saveChanges() -> Bool {
        do {
            let encoder = PropertyListEncoder()
            let data = try encoder.encode(favorites)
            try data.write(to: itemArchiveURL)
            return true
        } catch {
            return false
        }
    }

}



