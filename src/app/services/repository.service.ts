import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private githubApiUrl = 'https://api.github.com/user/repos';

  private headers = new HttpHeaders({
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this.githubApiUrl, { headers: this.headers });
  }

  createRepository(name: string, description: string): Observable<any> {
    const body = {
      name: name,
      description: description
    };

    return this.http.post(this.githubApiUrl, body, { headers: this.headers });
  }


  updateRepository(owner: string, repo: string, changes: any): Observable<any> {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    return this.http.patch(url, changes, { headers: this.headers });
  }

  deleteRepository(owner: string, repo: string): Observable<any> {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    return this.http.delete(url, { headers: this.headers });
  }

}
