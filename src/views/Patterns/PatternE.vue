<template>
  <div class="columns">
    <div class="column is-half">
      <div class="card">
        <header class="card-header">
          <p class="title p-5 is-4">
            {{ patternName }}
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-left">
            <p class="mt-3 subtitle is-5">{{ principle }}</p>
          </div>
          <div class="content has-text-left">
            <div class="title is-5">Problem</div>
            {{ problem }}
          </div>
          <div class="content has-text-left">
            <div class="title is-5">Situation</div>
            {{ situation }}
          </div>
          <div class="content has-text-left">
            <div class="title is-5">Solution</div>
            {{ solution }}.
          </div>
          <div class="content has-text-left">
            <div class="title is-5">Implementation Details</div>
            {{ implDetails }}
          </div>
          <div class="content has-text-left">
            <div class="title is-5">Relationships</div>
            <div class="title is-6">Similar</div>
            <div v-if="similarPattern.length === 0">-</div>
            <nav>
              <ul>
                <li v-for="pattern in similarPattern" :key="pattern.name">
                  <router-link :to=pattern.href>{{ pattern.name }}</router-link>
                </li>
              </ul>
            </nav>
            <div class="title is-6 mt-3">Uses</div>
            <div v-if="usePattern.length === 0">-</div>
            <nav>
              <ul>
                <li v-for="pattern in usePattern" :key="pattern.name">
                  <router-link :to=pattern.href>{{ pattern.name }}</router-link>
                </li>
              </ul>
            </nav>
            <div class="title is-6 mt-3">Combines</div>
            <div v-if="combinationPattern.length === 0">-</div>
            <nav>
              <ul>
                <li v-for="pattern in combinationPattern" :key="pattern.name">
                  <router-link :to=pattern.href>{{ pattern.name }}</router-link>
                </li>
              </ul>
            </nav>
          </div>


          <div v-if="commentMode===false">

            <div class="field">
              <div class="field-body">
                <div class="field">
                  <div class="is-pulled-left mr-2 title is-5">Comments</div>
                  <div>({{ this.numberRatings }})</div>
                  <b-button type="is-text" :icon-left="this.$store.state.isOpen ? 'menu-down' : 'menu-up'"
                            @click="toggleComments()" class="is-pulled-right">
                    {{ this.$store.state.isOpen ? "Collapse" : "Expand" }}
                  </b-button>
                </div>
              </div>
            </div>

            <b-collapse v-model="this.$store.state.isOpen" animation="slide">
              <div v-for="comment in accordingComments" class="mb-2">
                <button v-if="editMode" class="delete mt-5 mr-2 is-pulled-right" size="is-small" type="button"
                        @click="deleteComment(comment.commentsId)"/>
                <div class="comment">
                  <div class="has-text-weight-medium is-size-5">{{ comment.name }}:</div>
                  <div>{{ comment.comment }}</div>
                  <div class="mt-1">Rating: {{ comment.rating }}/10</div>
                </div>
              </div>
            </b-collapse>
          </div>
          <div v-else class="content has-text-left" style="border-bottom: none">
            <div class="title is-6">Add new Comment</div>
            <b-field label="Name">
              <b-input placeholder="Enter your Name..." maxlength="50" v-model="newCommentName"></b-input>
            </b-field>
            <b-field label="Comment">
              <b-input placeholder="Enter your comment..." type="textarea" maxlength="250"
                       v-model="newCommentContent"/>
            </b-field>
            <b-field label="Rating">
              <b-rate
                  v-model.number="newRating"
                  :max=10
                  icon="star-circle">
              </b-rate>
            </b-field>

          </div>
          <ul>
            <li></li>
          </ul>

          <div class="content has-text-left" style="border-bottom: none">
            <div v-if="commentMode===false">
              <b-button class="is-pulled-right mb-3"
                        icon-left="pencil-outline"
                        @click="enterCommentMode()">
                Add Comment
              </b-button>
            </div>

            <div v-else>
              <b-button class="is-pulled-right ml-3 mb-3"
                        icon-left="close"
                        @click="leaveCommentMode()">
                Cancel
              </b-button>
              <b-button class="is-pulled-right  mb-3"
                        icon-left="content-save"
                        @click="postComment()">
                Post
              </b-button>

            </div>

          </div>
        </div>
      </div>
      <div class="column is-one-third"></div>
    </div>

    <!--right side-->

    <div class=" column is-5" style="max-width: 575px;">
      <div class="card">
        <div class="card-content">
          <div class="content pt-3">
            <img :src="img" alt="">
          </div>
          <div class="title is-5">Stage</div>
          <template>
            <b-steps v-model="stage" :has-navigation=false>
              <b-step-item :clickable="editMode" label="Created" icon="pencil"></b-step-item>
              <b-step-item :clickable="editMode" label="Consideration" icon="head-dots-horizontal"></b-step-item>
              <b-step-item :clickable="editMode" label="Candidate" icon="head-check"></b-step-item>
              <b-step-item :clickable="editMode" label="Approved" icon="check-bold"></b-step-item>
            </b-steps>
          </template>

          <div class="title is-5">Rating</div>
          <b-field grouped group-multiline>
            <div>
              <b-rate
                  v-model.number="averageRating"
                  :max=10
                  :disabled="true"
                  icon="star-circle">
              </b-rate>
            </div>
            <div class="ml-1">({{ this.numberRatings }})</div>
          </b-field>


          <div class="content" style="border-bottom: none">
            <div class="pt-3 title is-5">Tags</div>
            <div class="field" v-if="editMode===false">
              <b-tag class="mr-2" v-for="tags in accordingTags" :key="tags.tagId">{{ tags.tag }}</b-tag>
            </div>
            <div v-else>
              <b-tag
                  closable
                  aria-close-label="Close tag"
                  @close=deleteTag(tags.tagId)
                  class="mr-2" v-for="tags in accordingTags" :key="tags.tagId">{{ tags.tag }}
              </b-tag>
              <b-field>
                <b-input icon="label" placeholder="Add a tag" class="mt-3" v-model="newTag"></b-input>
                <b-button class="mt-3" @click="addTag()">Add Tag</b-button>
              </b-field>
            </div>
          </div>
        </div>
        <div class="is-flex is-justify-content-flex-end is-align-items-center" style="height: 75px;">
          <div v-if="editMode===false">
            <b-button class="mr-3"
                      icon-left="pencil-outline"
                      @click="enterEditMode()"
                      v-if="this.$store.state.isLogged">
              Edit
            </b-button>
          </div>

          <div v-else>
            <b-button class="mr-3"
                      icon-left="content-save"
                      @click="updatePattern()">
              Save
            </b-button>
            <b-button class="mr-3"
                      icon-left="close"
                      @click="leaveEditMode()">
              Cancel
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component

export default class PatternA extends Vue {

  // change this

  private id = 5
  private patternName = 'Pattern E'
  private principle = 'Pattern E Principle'
  private problem = 'Pattern E Problem'
  private situation = 'Pattern E Situation'
  private solution = 'Pattern E Solution'
  private implDetails = 'Pattern E Implementation Details'
  private img = require('@/assets/patternImg/patternE.webp')
  private relatedPattern = [
    // use | similar | combination
    {
      name: "Pattern B",
      relationship: "use",
      href: "/patterns/pattern-b"
    },
    {
      name: "Pattern C",
      relationship: "similar",
      href: "/patterns/pattern-c"
    },
    {
      name: "Pattern D",
      relationship: "similar",
      href: "/patterns/pattern-d"
    }

  ]

  // dont change this

  private name = ""
  private stage = 0
  private accordingComments = []
  private accordingTags = []
  private newCommentName = ""
  private newCommentContent = ""
  private newTag = ""
  private newRating = 0
  private averageRating = 0
  private allRatings = []
  private numberRatings = 0

  private usePattern = this.relatedPattern.filter(p => (p.relationship === 'use'))
  private similarPattern = this.relatedPattern.filter(p => (p.relationship === 'similar'))
  private combinationPattern = this.relatedPattern.filter(p => (p.relationship === 'combination'))


  private editMode = false
  private commentMode = false


  private enterEditMode() {
    this.editMode = true
    this.$store.commit('toggleComments',true)
  }

  private leaveEditMode() {
    this.editMode = false
    this.$store.commit('toggleComments',false)
  }

  private enterCommentMode() {
    this.commentMode = true
  }

  private leaveCommentMode() {
    this.commentMode = false
    this.newCommentName = ""
    this.newCommentContent = ""
    this.newRating = 0
  }

  private toggleComments() {
    this.$store.commit('toggleComments', !this.$store.state.isOpen)
  }

  private updatePattern() {
    const pattern = {
      name: this.name,
      stage: this.stage,
    }

    Vue.axios.put(`${this.$store.state.root}/api/patterns/${this.id}`, pattern)
        .then(this.getData)
    this.editMode = false
  }

  private postComment() {

    if (this.newCommentName != "" && this.newCommentContent != "" && this.newRating != 0) {

      const comment = {
        name: this.newCommentName,
        comment: this.newCommentContent,
        rating: this.newRating,
        pattern: this.id
      }

      Vue.axios.post(`${this.$store.state.root}/api/comments`, comment)
          .then(this.getData)
      this.commentMode = false
      this.newCommentName = ""
      this.newCommentContent = ""
      this.newRating = 0
    } else {
      this.$buefy.toast.open({
        message: `Please enter a Name, a Comment and Rate first`,
        position: 'is-bottom',
        type: 'is-danger'
      })
    }
  }

  private deleteComment(id: number) {

    Vue.axios.delete(`${this.$store.state.root}/api/comments/${id}`)
        .then(this.getData)

  }

  private deleteTag(id: number) {
    Vue.axios.delete(`${this.$store.state.root}/api/tags/${id}`)
        .then(this.getData)
  }

  private addTag() {

    if (this.newTag.trim() != "") {
      const tag = {
        tag: this.newTag,
        pattern: this.id
      }

      Vue.axios.post(`${this.$store.state.root}/api/tags`, tag)
          .then(this.getData)
      this.newTag = ""
    } else {
      this.$buefy.toast.open({
        message: `Please enter a Tag first`,
        position: 'is-bottom',
        type: 'is-danger'
      })

    }
  }

  private async getData() {

    Promise.all([
      fetch(`${this.$store.state.root}/api/patterns/${this.id}`, {
        method: 'GET'
      }),
      fetch(`${this.$store.state.root}/api/comments/`, {
        method: 'GET'
      }),
      fetch(`${this.$store.state.root}/api/tags/`, {
        method: 'GET'
      })
    ]).then(async allResponses => {
      const patternData = await allResponses[0].json()
      this.stage = parseInt(patternData.stage)
      this.name = patternData.name
      const commentData = await allResponses[1].json()
      this.accordingComments = commentData.filter((c: any) => (c.pattern == this.id))
      this.allRatings = this.accordingComments.map((int: any) => int.rating) as []
      const sum = this.allRatings.reduce((a: any, b: any) => a + b, 0)
      this.averageRating = (sum / this.allRatings.length) || 0
      this.numberRatings = this.allRatings.length
      const tagData = await allResponses[2].json()
      this.accordingTags = tagData.filter((t: any) => (t.pattern == this.id))
    })

  }

  created() {
    this.getData()
  }


}


</script>

<style scoped>


</style>