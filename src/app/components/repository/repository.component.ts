import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.html',
  styleUrls: ['./repository.css']
})
export class RepositoryComponent implements OnInit {

  repositories: any[] = [];
  newRepositoryName: string = '';
  newRepositoryDescription: string = '';
  changes: { [key: string]: any } = {};
  showUpdateForm: { [key: string]: boolean } = {};

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit() {
    this.repositories.forEach(repository => {
      this.changes[repository.name] = { description: repository.description };
    });
    this.getRepositories();
  }

  getRepositories() {
    this.repositoryService.getRepositories().subscribe(
      (response) => this.handleRepositoriesResponse(response),
      (error) => this.handleRepositoriesError(error)
    );
  }

  createRepository() {
    if (this.newRepositoryName.trim() !== '') {
      this.repositoryService.createRepository(this.newRepositoryName, this.newRepositoryDescription).subscribe(
        (response) => this.handleCreateRepositoryResponse(response),
        (error) => this.handleCreateRepositoryError(error)
      );
    }
  }

  updateObject(owner: string, repo: string) {
    const description = this.changes[repo]?.description;
    if (description !== "") {
      const requestBody = {
        description: description
      };
      console.log('Request Body:', requestBody);
      this.repositoryService.updateRepository(owner, repo, requestBody).subscribe(
        (response) => this.handleUpdateObjectResponse(response),
        (error) => this.handleUpdateObjectError(error)
      );
    } else {
      console.log('Description is empty. Skipping update request.');
    }
  }



  onDeleteRepository(owner: string, repo: string) {
    this.repositoryService.deleteRepository(owner, repo).subscribe(
      response => this.handleDeleteObjectResponse(response),
      error => this.handleDeleteObjectError(error)
    );
  }

  toggleUpdateForm(repoName: string) {
    // Toggle the update form for the specified repository
    this.showUpdateForm[repoName] = !this.showUpdateForm[repoName];

    if (!this.showUpdateForm[repoName]) {
      // Reset changes when hiding the form
      this.changes[repoName] = { description: this.repositories.find(repo => repo.name === repoName)?.description };
    }
  }



  // Response and error handling functions

  private handleRepositoriesResponse(response: any): void {
    this.repositories = response;
  }

  private handleRepositoriesError(error: any): void {
    console.error('Error fetching repositories:', error);
  }

  private handleCreateRepositoryResponse(response: any): void {
    console.log('Repository created successfully:', response);
    this.getRepositories(); // Refresh the list of repositories after creation
  }

  private handleCreateRepositoryError(error: any): void {
    console.error('Error creating repository:', error);
  }

  private handleUpdateObjectResponse(response: any): void {
    console.log('Object updated successfully:', response);
  }

  private handleUpdateObjectError(error: any): void {
    console.error('Error updating object:', error);
  }

  private handleDeleteObjectResponse(response: any): void {
    console.log('Object deleted successfully:', response);
  }

  private handleDeleteObjectError(error: any): void {
    console.error('Error deleting object:', error);
  }
}
