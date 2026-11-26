---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["tangent map", "differential of a map", "pushforward", "f_*", "differenziale di un'applicazione", "dP", "dP = P_u du + P_v dv", "cambio di coordinate di un campo"]
tags: [competenza, area/algebra-geometria]
---

# Applicazione tangente

> $f_{*q}$ è l'applicazione lineare che porta i vettori tangenti in $q$ nei vettori tangenti in $f(q)$, facendo passare le curve attraverso $f$. Nelle basi $\partial_{x_i}$, $\partial_{y_k}$ la sua matrice è la jacobiana.

## Definizione / enunciato
Sia $f:\Omega\subseteq\mathbb R^n\to\mathbb R^m$ di classe $C^1$. L'applicazione tangente è
$$f_{*q_0}:T_{q_0}\Omega\to T_{f(q_0)}\mathbb R^m,\qquad f_{*q_0}(\gamma'(0))=(f\circ\gamma)'(0),$$
con $\gamma(0)=q_0$.

**Proposizioni (dimostrate):**
1. $f_{*q_0}(\partial_{x_j}|_{q_0})=\frac{\partial f_k}{\partial x_j}(q_0)\,\partial_{y_k}|_{f(q_0)}$: la matrice di $f_*$ è la jacobiana.
2. $(f_*w)(h)=w(h\circ f)$.
3. Composizione: $(g\circ f)_*=g_*\circ f_*$.
4. Se $\det J_{q_0}f\neq0$ (con $n=m$), $f_{*q_0}$ è un isomorfismo.

Sui campi: $f_*(X)$ è un campo **lungo** $f$. Se $f$ è un cambio di coordinate (biunivoca, jacobiano non nullo), il campo nelle nuove coordinate è $f_*(X)\circ f^{-1}$.

**Notazione (L18).** $f_*$ si dice differenziale e si scrive $df$; per $m=1$ coincide con il differenziale classico e $Jf=\nabla f$. Per una superficie:
$$dP:=P_*=P_u\,du+P_v\,dv .$$

## Formule chiave
$$f_*\big(a\partial_u+b\partial_v\big)=(a\xi_u+b\xi_v)\partial_\xi+(a\eta_u+b\eta_v)\partial_\eta,\qquad \text{cioè } J_qf\binom ab$$

## Intuizione
$f_*$ è la "derivata" di $f$ vista come mappa tra spazi tangenti: linearizza $f$ vicino a $q$. Con le derivazioni diventa la regola della catena.

## Come si usa
Cambi di coordinate di un campo, esempi della lezione:
- Polari, $f=(\sqrt{u^2+v^2},\arctan\frac vu)$: $-v\partial_u+u\partial_v\mapsto\partial_\varphi$ e $u\partial_u+v\partial_v\mapsto r\partial_r$. Il campo costante $\partial_u+\partial_v$ diventa $(\cos\varphi+\sin\varphi)\partial_r+\frac{\cos\varphi-\sin\varphi}{r}\partial_\varphi$.
- All'inverso: $\partial_r=\cos\varphi\,\partial_u+\sin\varphi\,\partial_v$, radiale di norma 1; $\partial_\varphi$ ha norma $r$.
- Raddrizzamento: con $\xi=u+ve^{-u}$ e $\eta=ve^{-u}$, il campo $\partial_u+v\partial_v$ diventa $\partial_\xi$. Il docente fornisce la soluzione senza ricavarla.
- Velocità dell'elica $(R\cos t,R\sin t,Kt)$ in coordinate cilindriche: $\partial_\varphi+K\partial_z$. Qui $K$ è il passo dell'elica (il docente usa questa lettera in L14), non la curvatura; in "Elica circolare" lo stesso passo si chiama $h$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione12_GD.pdf` (pp. 16-36);
  - `triennale/ANNO 2/geometria differenziale/Lezione13_GD.pdf` (pp. 7-13, 19-20);
  - `triennale/ANNO 2/geometria differenziale/Lezione14_GD.pdf` (pp. 1-12);
  - `triennale/ANNO 2/geometria differenziale/Lezione15_GD.pdf` (pp. 1-5);
  - `triennale/ANNO 2/geometria differenziale/Lezione18_GD.pdf` (pp. 1-3);
  - `triennale/ANNO 2/geometria differenziale/Lezione20_GD.pdf` (p. 1).

## Prerequisiti
- [[Spazio tangente]]: dominio e codominio di f_*
- [[Matrice jacobiana]]: matrice di f_* nelle basi ∂
- [[Regola della catena in più variabili]]: (f∘γ)'(0) e la composizione

## Porta a
- [[Teorema della funzione inversa]]: f_* invertibile implica f localmente invertibile
- [[Pull-back]]: f^* è la duale di f_*
- [[Mappa di Gauss]]: N_* è l'applicazione tangente della normale

## Collegati
- [[Campo vettoriale]]: f_*(X)∘f⁻¹ cambia coordinate a un campo
- [[Coordinate polari e cilindriche]]: esempi di cambio di coordinate
