---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["distributional derivative", "derivata nel senso delle distribuzioni", "derivata debole", "weak derivative", "derivata debole di Sobolev", "D^α u debole", "derivata della funzione di Heaviside", "formula dei salti", "funzione di Heaviside"]
tags: [competenza, area/analisi]
---

# Derivata distribuzionale

> Ogni distribuzione è derivabile infinite volte: la derivata si definisce spostando la derivata sulla funzione test, e per funzioni con salti produce delta di Dirac nei punti di salto.

## Definizione / enunciato
Per $T\in\mathcal D'$ (4.13):
$$\langle T',\varphi\rangle=\langle T,-\varphi'\rangle,\qquad\varphi\in\mathcal D,$$
motivata dall'integrazione per parti $\int f'\varphi=-\int f\varphi'$ (4.12), in cui i termini di bordo spariscono perché $\varphi$ ha supporto compatto.

**Proposizione 4.20 (formula dei salti).** Se $f$ è derivabile ovunque tranne in $x_0$, dove ha al più una discontinuità eliminabile o un salto, e $f'\in\mathcal R^1_{loc}$, allora
$$T_f'=[f(x_0^+)-f(x_0^-)]\,\delta_{x_0}+T_{f'}.$$
Si estende a un numero finito (e poi infinito, discreto) di salti.

## Formule chiave
- Proposizione 4.26: $(\lambda_1T_1+\lambda_2T_2)'=\lambda_1T_1'+\lambda_2T_2'$; $(T(x-x_0))'=T'(x-x_0)$; $(T(ax))'=aT'(ax)$.
- Proposizione 4.28 (Leibniz): $(\psi T)'=\psi'T+\psi T'$ per $\psi\in C^\infty$.
- $T_H'=\delta_0$; $T_{\ln|x|}'=\mathrm{v.p.}\frac1x$.
- Proposizione 4.45: $\mathrm{supp}(T')\subseteq\mathrm{supp}(T)$.

## Intuizione
Dove la funzione salta, la derivata classica "vede" solo le parti lisce; la derivata distribuzionale registra anche il salto come impulso di ampiezza pari al salto.

## Come si usa
- Esempio 4.21: $f=e^xH(x-1)$ salta da $0$ a $e$ in $1$, quindi $T_f'=e\,\delta_1+T_f$.
- Esempio 4.24: $f=H(x)-2H(2-x)$ vale $-2,-1,1$ sui tre tratti, quindi $T_f'=\delta_0+2\delta_2$.
- Esempio 4.36: $|\sin x|$ è continua, quindi $T_f'=T_{f'}$ con $f'=\mathrm{sgn}(\sin x)\cos x$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.5.4 "La derivazione". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 17-23 del PDF); `10 - Derivata distribuzionale e Convergenza.pdf` (Richiami di teoria).
- **Equazioni alle derivate parziali** (triennale): Def. 5.2.2 in più variabili, $\langle D^\alpha T,\varphi\rangle=(-1)^{|\alpha|}\langle T,D^\alpha\varphi\rangle$ (5.6): ogni distribuzione è infinitamente derivabile e Schwarz è automatico; se $f\in C^1$, $\partial_{x_i}T_f=T_{\partial_{x_i}f}$. **Derivata debole** (Evans §5.2.1): per $u,v\in L^1_{\rm loc}(U)$, $D^\alpha u=v$ in senso debole se $\int_UuD^\alpha\phi\,dx=(-1)^{|\alpha|}\int_Uv\phi\,dx$ per ogni $\phi\in C_c^\infty(U)$, cioè la derivata distribuzionale è rappresentata da una funzione; è unica q.o. Esempi ($n=1$, $U=(0,2)$): $u=x$ su $(0,1]$, $u=1$ su $[1,2)$ ha $u'=\chi_{(0,1]}$ debole; $u=x$ su $(0,1]$, $u=2$ su $(1,2)$ non ha derivata debole (il salto produce $\phi(1)$). È la base degli spazi di Sobolev. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 51); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 242-244).

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: derivata definita per dualità

## Porta a
- [[Lemma di Weyl]]: soluzioni di $-\Delta u=0$ in $\mathcal D'$ (Equazioni alle derivate parziali)
- [[Soluzione fondamentale di un operatore differenziale]]: operatore aggiunto e $LU=\delta_0$ (Equazioni alle derivate parziali)
- [[Spazi di Sobolev]]: derivate deboli in $L^p$ (Equazioni alle derivate parziali)

## Collegati
- [[Delta di Dirac]]: $H'=\delta$
- [[Punti di discontinuità]]: i salti generano delta
- [[Lemma fondamentale del calcolo delle variazioni]]: unicità q.o. della derivata debole (Equazioni alle derivate parziali)
- [[Funzioni a derivata nulla]]: una distribuzione con $u'=0$ in $\mathcal D'(a,b)$ è costante (Equazioni alle derivate parziali)
