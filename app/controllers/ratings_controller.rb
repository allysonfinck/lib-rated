class RatingsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Rating.all
    end

    def show
        render json: Rating.find(params["id"])
    end

    def create
        render json: Rating.create(params["rating"])
    end

    def delete
        render json: Rating.delete(params["id"])
    end

    def update
        render json: Rating.update(params["id"], params["rating"])
    end
end
