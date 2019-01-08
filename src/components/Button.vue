<template>
  <button
    class="btn"
    :class="`${type} ${color}`"
    @click="$emit('click', $event)">
    <slot>Button Text</slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      default: "solid",
      type: String,
      validator(prop) {
        return ["solid", "light", "light-2"].indexOf(prop) > -1;
      }
    },
    color: {
        default: "royal-blue",
        type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin onHover($color) {
      box-shadow: 0 10px 30px -5px $color;
}
.btn {
    @include border-radius(10px);
    border:none;
    padding: 14px 20px;
    -webkit-transition: box-shadow .4s ease;
    transition: box-shadow .4s ease;
    color: #fff!important;
    font-family: Quicksand,sans-serif;
    font-size: 18px;
    font-weight: 700;
    background-color: $royal-blue;
    cursor: pointer;
  &.royal-blue {
    background: $royal-blue;
    &:active {
			background: $royal-blue;
    }
    &:hover {
      @include onHover($royal-blue);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $lavender;
			transition: border-color .4s ease;
			color: $royal-blue!important;
			&:hover {
				border-color: $royal-blue;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($royal-blue, 0.1);
			box-shadow: none;
			background-color: $lavender;
			transition: border-color .4s ease;
			color: $royal-blue!important;
			&:hover {
				border-color: $royal-blue;
			}
		}
	}
	
	&.sea-green {
    background: $sea-green;
    &:active {
			background: $sea-green;
    }
    &:hover {
      @include onHover($sea-green);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $azure;
			transition: border-color .4s ease;
			color: $sea-green!important;
			&:hover {
				border-color: $sea-green;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($sea-green, 0.1);
			box-shadow: none;
			background-color: $azure;
			transition: border-color .4s ease;
			color: $sea-green!important;
			&:hover {
				border-color: $sea-green;
			}
		}
	}
	
	&.purple {
    background: $purple;
    &:active {
			background: $purple;
    }
    &:hover {
      @include onHover($purple);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $pink-lavender;
			transition: border-color .4s ease;
			color: $purple!important;
			&:hover {
				border-color: $purple;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($purple, 0.1);
			box-shadow: none;
			background-color: $pink-lavender;
			transition: border-color .4s ease;
			color: $purple!important;
			&:hover {
				border-color: $purple;
			}
		}
	}
	&.lime-green {
    background: $lime-green;
    &:active {
			background: $lime-green;
    }
    &:hover {
      @include onHover($lime-green);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $honeydew;
			transition: border-color .4s ease;
			color: $lime-green!important;
			&:hover {
				border-color: $lime-green;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($lime-green, 0.1);
			box-shadow: none;
			background-color: $honeydew;
			transition: border-color .4s ease;
			color: $lime-green!important;
			&:hover {
				border-color: $lime-green;
			}
		}
	}
	&.blue {
    background: $blue;
    &:active {
			background: $blue;
    }
    &:hover {
      @include onHover($blue);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $alice-blue;
			transition: border-color .4s ease;
			color: $blue!important;
			&:hover {
				border-color: $blue;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($blue, 0.1);
			box-shadow: none;
			background-color: $alice-blue;
			transition: border-color .4s ease;
			color: $blue!important;
			&:hover {
				border-color: $blue;
			}
		}
	}
	
	&.gold {
    background: $gold;
    &:active {
			background: $gold;
    }
    &:hover {
      @include onHover($gold);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $cornsilk;
			transition: border-color .4s ease;
			color: $gold!important;
			&:hover {
				border-color: $gold;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($gold, 0.1);
			box-shadow: none;
			background-color: $cornsilk;
			transition: border-color .4s ease;
			color: $gold!important;
			&:hover {
				border-color: $gold;
			}
		}
	}
	&.red {
    background: $red;
    &:active {
			background: $red;
    }
    &:hover {
      @include onHover($red);
		}
		&:focus {
			outline: none;
		}
		&.light {
			padding: 12px 18px;
			border: 2px solid transparent;
			box-shadow: none;
			background-color: $misty-rose;
			transition: border-color .4s ease;
			color: $red!important;
			&:hover {
				border-color: $red;
			}
		}
		&.light-2 {
			padding: 12px 18px;
			border-style: solid;
			border-width: 2px;
			border-color: rgba($red, 0.1);
			box-shadow: none;
			background-color: $misty-rose;
			transition: border-color .4s ease;
			color: $red!important;
			&:hover {
				border-color: $red;
			}
		}
  }

}
</style>
