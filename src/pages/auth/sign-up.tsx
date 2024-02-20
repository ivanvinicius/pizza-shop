import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const formSchema = z.object({
  restaurantName: z.string(),
  manangerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

type formType = z.infer<typeof formSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  })

  const navigate = useNavigate()

  async function handleSignUp(data: formType) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      toast.success('Estabelecimento cadastrado com sucesso.', {
        action: {
          label: 'Acessar painel',
          onClick: () => navigate('/sign-in'),
        },
      })

      console.log(data)
    } catch {
      toast.error(
        'Houve um problema ao finalizar o cadastro do estabelecimento.',
        {
          action: {
            label: 'Tentar novamente',
            onClick: () => handleSignUp(data),
          },
        },
      )
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8 ">
        <Button className="absolute right-8 top-8" variant={'link'} asChild>
          <Link to="/sign-in">Acessar painel</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta grátis
            </h1>
            <span className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas
            </span>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2 ">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" {...register('restaurantName')} />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="manangerName">Seu nome completo</Label>
              <Input id="manangerName" {...register('manangerName')} />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Finalizando cadastro...' : 'Finalizar cadastro'}
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed  text-muted-foreground ">
              Ao continuar, você concorda com nossos{' '}
              <Link
                className="text-primary underline underline-offset-4"
                to="/sign-up"
              >
                termos de serviço
              </Link>{' '}
              e{' '}
              <Link
                className="text-primary underline underline-offset-4"
                to="/sign-up"
              >
                políticas de privacidade
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
