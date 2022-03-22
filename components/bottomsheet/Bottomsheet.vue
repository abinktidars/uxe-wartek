<template>
  <transition name="bottomsheet-fade">
    <div 
      class="bottomsheet-overlay" 
      @click="$emit('close-bottomsheet')"
      aria-label="Close Bottomsheet"
      @keydown.esc="onEsc"
    >
      <div 
        class="bottomsheet" 
        @click.stop
        role="dialog"
        aria-labelledby="bottomsheetTitle"
        aria-describedby="bottomsheetDescription"
      >
        <div class="bottomsheet__head">
            Share question
        </div>
        <div class="bottomsheet__body">
            <div class="avatar">
            <div class="avatar__images">
                <img src="~/assets/images/photo-3.png" alt="" />
            </div>
            <div class="avatar__name">Jason Drill</div>
            </div>
            <div class="avatar active">
            <div class="avatar__images">
                <img src="~/assets/images/photo-2.png" alt="" />
            </div>
            <div class="avatar__name">Dominic Schumblerger</div>
            </div>
            <div class="avatar">
            <div class="avatar__images">
                <img src="~/assets/images/photo-4.png" alt="" />
            </div>
            <div class="avatar__name">Adrian Jay</div>
            </div>
            <div class="avatar active">
            <div class="avatar__images">
                <img src="~/assets/images/photo-1.png" alt="" />
            </div>
            <div class="avatar__name">Jason Drill</div>
            </div>
            <div class="avatar active">
            <div class="avatar__images">
                <img src="~/assets/images/photo-5.png" alt="" />
            </div>
            <div class="avatar__name">Fabinho Guiterez</div>
            </div>
        </div>
        <div class="bottomsheet__footer">
            <div class="list">
            <div class="list__item">
                <img src="~/assets/images/icon/icon-bookmark.svg" alt=""> Add question to Bookmarks
            </div>
            <div class="list__item">
                <img src="~/assets/images/icon/icon-share.svg" alt=""> Share question via...
            </div>
            </div>   
            <button class="h-10 px-6 rounded-md bg-blue-500 text-white mt-4 w-full">
            Send
            </button>          
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./bottomsheet.js"></script>

<style lang="scss" scoped>

$wrtk-white: #FFFFFF;
$wrtk-gray: #f2f2f2;
$wrtk-blue: #218DFE;

.bottomsheet-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: rgba(0,0,0,0.6);
}

.bottomsheet {
  padding: 8px 0;
  background: $wrtk-white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  transition: all 0.3s;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-height: 400px;
  max-width: 768px;
  position: fixed;
  &__head {
    text-align: center;
    font-size: 14px;
    padding: 16px 0;
  }
  &__body {
    border-top: 1px solid $wrtk-gray;
    border-bottom: 1px solid $wrtk-gray;
    padding: 16px;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    .avatar {
      position: relative;
      width: 100px;
      text-align: center;
      min-width: 80px;
      &__images {
        img {
          width: 48px;
          border-radius: 50%;
          margin: auto;
          &.active {
            border: 1px solid $wrtk-blue;
          }
        }
      }
      &__name {
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  &__footer {
    padding: 16px;
    .list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      &__item {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 14px;
        &-icon {
          img {            
            width: 18px;
          }
        }
      }
    }
  }
}

.bottomsheet-fade-enter,
.bottomsheet-fade-leave-to {
  opacity: 0;
}
.bottomsheet-fade-enter-active,
.bottomsheet-fade-leave-active {
  transition: opacity .4s ease;
}
</style>